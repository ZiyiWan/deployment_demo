import {
  BarsOutlined,
  DiffOutlined,
  ForkOutlined,
  LaptopOutlined,
  NotificationOutlined,
  ProfileOutlined,
  ScanOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { MenuProps, Space, Table, Tag } from "antd";
import { Breadcrumb, Layout, Menu, Avatar } from "antd";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getMedResById, getPatientById } from "../apiservice/axios";
import { PatientData } from "../dataModel/dataModel";

function PatientDetail() {
  const router = useRouter();
  const { Header, Content, Sider } = Layout;
  const patientID: number = parseInt(router.asPath.slice(9));
  const [patient, setPatient] = useState<PatientData>();
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getPatientById(patientID).then((res: any) => {
      console.log(res);
      res = res[0].resource;
      console.log(res);
      let addressList = res.address[0];
      const address: string =
        addressList.line[0] +
        ", " +
        addressList.city +
        ", " +
        addressList.state +
        ", " +
        addressList.postalCode +
        ", " +
        addressList.country;
      const currentPatient: PatientData = {
        name: res.name,
        DOB: res.birthDate,
        Sex: res.gender,
        address: address,
        telecom: res.telecom[0].value,
      };
      setPatient(currentPatient);
    });
    const res = getMedResById(patientID).then((res: any) => {
      return res;
    });
    console.log("Raw res: " + res);
    console.log(res);
    getMedResById(patientID).then((res: any) => {
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
        });
        setDataSource(data);
      }
    });
  }, [patientID]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Content",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Practitioner",
      dataIndex: "practitioner",
      key: "practitioner",
    },
    {
      title: "Status",
      key: "status",
      render: (record: any) => {
        if (record.status === "stopped") {
          return <Tag color="red">{record.status}</Tag>;
        }
      },
    },
  ];

  const App: React.FC = () => (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <Space size={"large"} align="center">
          <Avatar shape="square" size="large" icon={<UserOutlined />} />
          <span style={{ color: "white", fontSize: "20px" }}>
            {patient?.name[0].given} {patient?.name[0].family}
          </span>
          <span
            style={{ color: "white", marginLeft: "40px", fontSize: "14px" }}
          >
            DOB: {patient?.DOB}
          </span>
          <span style={{ color: "white", fontSize: "14px" }}>
            Sex: {patient?.Sex}
          </span>
          <span style={{ color: "white", fontSize: "14px" }}>
            Phone Number: {patient?.telecom}
          </span>
          <span style={{ color: "white", fontSize: "14px" }}>
            Address: {patient?.address}
          </span>
        </Space>
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
            <Menu.Item key="2" icon={<ScanOutlined />}>
              Procedure
            </Menu.Item>
            <Menu.Item key="3" icon={<ProfileOutlined />}>
              Diagnostic Report
            </Menu.Item>
            <Menu.Item key="4" icon={<ForkOutlined />}>
              Observation
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Table columns={columns} dataSource={dataSource} />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );

  return <App />;
}

export default PatientDetail;
