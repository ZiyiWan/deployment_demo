import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  ProfileOutlined,
  QuestionCircleOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Breadcrumb, Layout, Menu, Space } from "antd";
import React from "react";
import { PatientData } from "../dataModel/dataModel";
import SubMenu from "antd/lib/menu/SubMenu";
import Survey from "./survey";
import {
  questionsForAQol_4D,
  questionsForED,
} from "../components/survey/content";

function PageLayout() {
  const router = useRouter();
  const query = router.query;
  const id = query.id;
  const [patient, setPatient] = useState<PatientData>();
  const [selectedMenuItem, setSelectedMenuItem] = useState("item1");
  const { Header, Content, Sider } = Layout;

  useEffect(() => {
    console.log(id);
  }, []);

  const componentsSwtich = (key: any) => {
    switch (key) {
      case "item1":
        return <h1>patient id is {id}</h1>;
      case "item2":
        return <h1>item2</h1>;
      case "item3":
        return <h3>item3</h3>;
      case "item4":
        return <h3>item4</h3>;
      case "AQol-4D":
        return <Survey content={questionsForAQol_4D} />;
      case "ED PREM":
        return <Survey content={questionsForED} />;
      default:
        return <h3>qusetionnaire</h3>;
    }
  };
  const App: React.FC = () => (
    <Layout style={{ minHeight: "100vh" }}>
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
        </Space>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            selectedKeys={[selectedMenuItem]}
            onClick={(e) => setSelectedMenuItem(e.key)}
            mode="inline"
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item key="item1" icon={<UserOutlined />}>
              Patient Info
            </Menu.Item>
            <Menu.Item key="item2" icon={<SolutionOutlined />}>
              Medication Requset
            </Menu.Item>
            <Menu.Item key="item3" icon={<ProfileOutlined />}>
              Diagnostic Report
            </Menu.Item>
            <SubMenu
              key="item4"
              icon={<QuestionCircleOutlined />}
              title="Questionnaire"
            >
              <Menu.Item key="AQol-4D">AQol-4D</Menu.Item>
              <Menu.Item key="ED PREM">ED PREM</Menu.Item>
            </SubMenu>
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
            style={{ margin: "24px 16px 0", overflow: "initial" }}
          >
            {componentsSwtich(selectedMenuItem)}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );

  return <App />;
}

export default PageLayout;
