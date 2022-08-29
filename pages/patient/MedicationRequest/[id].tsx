import { Header, Content } from "antd/lib/layout/layout";
import Sider from "antd/lib/layout/Sider";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getMedResById, getPatientById } from "../../../apiservice/axios";
import { PatientData } from "../../../dataModel/dataModel";
import { columnsOfMedRequest } from "../../../pageComponent/tableComponents";
import {
  ForkOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ProfileOutlined,
  ScanOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, MenuProps, Modal, Space, Table } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";
import React from "react";
import Link from "next/link";
import Survey from "../../survey";

function PatientDetail() {
  const router = useRouter();
  const query = router.query;
  const id = query.id;
  const [patient, setPatient] = useState<PatientData>();
  const [dataSource, setDataSource] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { Header, Content, Sider } = Layout;

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
        birthDate: res.birthDate,
        gender: res.gender,
        address: address,
        telecom: contactNum,
        meta:{lastUpdated:""}
      };
      setPatient(currentPatient);
    });
    const res = getMedResById(id).then((res: any) => {
      return res;
    });
    console.log("Raw res: " + res);
    console.log(res);
    getMedResById(id).then((res: any) => {
      console.log("MedRes:");
      console.log(res);
      if (res.data.total !== 0) {
        const data: any = [];
        res.data.entry.map((medInfo: any) => {
          let info = {
            id: medInfo.resource.id,
            content: medInfo.resource.medicationCodeableConcept.text,
            practitioner: medInfo.resource.requester.display,
            status: medInfo.resource.status,
          };
          data.push(info);
          console.log(info);
        });
        setDataSource(data);
      }
    });
  }, [id, router.isReady]);
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const App: React.FC = () => (
    <Layout style={{ height: "100vh" }}>
      <Header className="header">
        <Space size={"large"} align="center">
          <Avatar shape="square" size="large" icon={<UserOutlined />} />
          <span style={{ color: "white", fontSize: "20px" }}>
            {patient?.name[0].given} {patient?.name[0].family}
          </span>
          <span
            style={{ color: "white", marginLeft: "40px", fontSize: "14px" }}
          >
            DOB: {patient?.birthDate}
          </span>
          <span style={{ color: "white", fontSize: "14px" }}>
            Sex: {patient?.gender}
          </span>
          <span style={{ color: "white", fontSize: "14px" }}>
            Phone Number: {patient?.telecom}
          </span>
          <span style={{ color: "white", fontSize: "14px" }}>
            Address: {patient?.address}
          </span>
          <span style={{paddingLeft:"40px"}}>
            <Button>Button</Button>
          </span>
        </Space>
        <span style={{paddingRight:"0px"}}>
            <Button>Button 2</Button>
          </span>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            style={{ height: "100%", borderRight: 0 }}
            defaultSelectedKeys={["1"]}
          >
            <Menu.Item key="1" icon={<SolutionOutlined />}>
              Medication Request
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<ScanOutlined />}
              onClick={() => {
                setIsModalVisible(true);
              }}
            >
              AQol-4D
            </Menu.Item>
            <Menu.Item key="3" icon={<ProfileOutlined />}>
              <Link href={"/patient/DiagnosticReport/" + id}>
                Diagnostic Report
              </Link>
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
            <Breadcrumb.Item>Medication Request</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Table
              columns={columnsOfMedRequest}
              dataSource={dataSource}
              style={{ width: "85%" }}
            />
            <Modal
              title="AQoL-4D"
              visible={isModalVisible}
              onCancel={handleCancel}
              width={1200}
              footer={null}
            >
              <Survey />
            </Modal>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );

  return <App />;
}

export default PatientDetail;
