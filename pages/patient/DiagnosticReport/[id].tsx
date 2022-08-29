import {
  ForkOutlined,
  HomeOutlined,
  ProfileOutlined,
  ScanOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Col, Modal, Row, Table, Tag } from "antd";
import { Breadcrumb, Layout, Menu, Avatar } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getDiaRptById, getPatientById } from "../../../apiservice/axios";
import { PatientData } from "../../../dataModel/dataModel";
import Survey from "../../survey";

function DiagnosticReport() {
  const router = useRouter();
  const query = router.query;
  const id = query.id;
  const [patient, setPatient] = useState<PatientData>();
  //const [dataSource, setDataSource] = useState([]);
  const { Header, Content, Sider } = Layout;
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    if (!router.isReady) return;
    getPatientById(id).then((res: any) => {
      res = res[0].resource;
      let address = "";
      let contactNum = "";
      if ("address" in res) {
        let addressList = res.address[0];
        address =
          addressList.line[0] +
          ", " +
          addressList.city +
          ", " +
          addressList.state +
          ", " +
          addressList.postalCode +
          ", " +
          addressList.country;
      } else {
        address = "Unknow";
      }
      if ("telecom" in res) {
        contactNum = res.telecom[0].value;
      } else {
        contactNum = "Unknow";
      }
      const currentPatient: PatientData = {
        name: res.name,
        DOB: res.birthDate,
        Sex: res.gender,
        address: address,
        telecom: contactNum,
      };
      setPatient(currentPatient);
    });
    getDiaRptById(id).then((res: any) => {
      console.log("DiaRpt:");
      console.log(res);
      if (res.data.total !== 0) {
        const data: any = [];
        res.data.entry.map((diaInfo: any) => {
          let info = {
            id: diaInfo.resource.id,
            effectiveDate: diaInfo.resource.effectiveDateTime,
            status: diaInfo.resource.status,
          };
          data.push(info);
          console.log(info);
        });
        //setDataSource(data);
      }
    });
  }, [id, router.isReady]);

  const columnsOfDiagRpt = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Effective Date",
      dataIndex: "effectiveDate",
      key: "effectiveDate",
    },
    {
      title: "Status",
      key: "status",
      render: (record: any) => {
        if (record.status === "final") {
          return <Tag color="orange">{record.status}</Tag>;
        } else {
          return <Tag color="green">{record.status}</Tag>;
        }
      },
    },
    {
      title: "",
      key: "result",
      render: (record: any) => {
        return (
          <Button
            onClick={() => {
              setIsModalVisible(true);
              console.log(record.id);
            }}
          >
            Result
          </Button>
        );
      },
    },
  ];
  const dataSource = [
    {
      key: "1",
      id: "pending",
      effectiveDate: "xx/xx/xxxx",
    },
  ];

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const App: React.FC = () => (
    <Layout style={{ height: "100vh" }}>
      <Header className="header">
        <Row justify="start" align="middle">
          <Avatar shape="square" size="large" icon={<UserOutlined />} />
          <Col span={4}>
            <strong
              style={{ color: "white", marginLeft: "25px", fontSize: "18px" }}
            >
              {patient?.name[0].given} {patient?.name[0].family}
            </strong>
          </Col>
          <Col span={16}>
            <span style={{ color: "white", fontSize: "16px" }}>
              DOB: {patient?.DOB}
            </span>
            <span
              style={{ color: "white", fontSize: "16px", marginLeft: "30px" }}
            >
              Sex: {patient?.Sex}
            </span>
            <span
              style={{ color: "white", fontSize: "16px", marginLeft: "30px" }}
            >
              Phone Number: {patient?.telecom}
            </span>
            <span
              style={{ color: "white", fontSize: "16px", marginLeft: "30px" }}
            >
              Address: {patient?.address}
            </span>
          </Col>
          <Col style={{ paddingLeft: "180px" }}>
            <Button
              type="primary"
              shape="circle"
              icon={<HomeOutlined />}
              onClick={() => {
                router.push("../../");
              }}
            />
          </Col>
        </Row>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            style={{ height: "100%", borderRight: 0 }}
            defaultSelectedKeys={["3"]}
          >
            <Menu.Item key="1" icon={<SolutionOutlined />}>
              Medication Request
            </Menu.Item>
            <Menu.Item key="2" icon={<ScanOutlined />}>
              Procedure
            </Menu.Item>
            <Menu.Item
              key="3"
              icon={<ProfileOutlined />}
              onClick={() => {
                router.push("");
              }}
            >
              Diagnostic Report
            </Menu.Item>
            <Menu.Item key="4" icon={<ForkOutlined />}>
              Observation
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Patient List</Breadcrumb.Item>
            <Breadcrumb.Item>Diagnostic Report</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
              height: "100vh",
            }}
          >
            <Modal
              title="AQoL-4D"
              visible={isModalVisible}
              onCancel={handleCancel}
              width={1200}
              footer={null}
            >
              <Survey />
            </Modal>
            <Table
              columns={columnsOfDiagRpt}
              dataSource={dataSource}
              style={{ width: "75%" }}
              pagination={{ defaultPageSize: 8 }}
            />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );

  return <App />;
}

export default DiagnosticReport;
