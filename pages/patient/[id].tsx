import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  HomeOutlined,
  ProfileOutlined,
  QuestionCircleOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Breadcrumb,
  Button,
  Col,
  Layout,
  Menu,
  Row,
  Space,
} from "antd";
import React from "react";
import { NameModel, PatientData } from "../../dataModel/dataModel";
import SubMenu from "antd/lib/menu/SubMenu";
import Survey from "../survey";
import {
  questionsForAQol_4D,
  questionsForED,
} from "../../components/survey/content";
import { getPatientById } from "../../apiservice/axios";
import PatientInfo from "../../pageComponent/patientDetail";

function PageLayout() {
  const router = useRouter();
  const query = router.query;
  const id = query.id;
  const [name, setName] = useState<NameModel>();
  const [selectedMenuItem, setSelectedMenuItem] = useState("item1");
  const { Header, Content, Sider } = Layout;

  useEffect(() => {
    if (!router.isReady) return;
    console.log(id);
    getPatientById(id).then((res: any) => {
      res = res[0].resource;
      console.log(res.name[0]);
      setName(res.name[0]);
    });
  }, [id, router.isReady]);

  const componentsSwtich = (key: any) => {
    switch (key) {
      case "item1":
        return <PatientInfo id={id}/>;
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
        <Row justify="start" align="middle">
          <Avatar shape="square" size="large" icon={<UserOutlined />} />
          <Col span={6}>
            <strong
              style={{ color: "white", marginLeft: "25px", fontSize: "22px" }}
            >
              {name?.prefix+" "} 
              {` ${name?.given}`} 
            </strong>
          </Col>
          <Col offset={16}>
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
            <Breadcrumb.Item>Patient Detail</Breadcrumb.Item>
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
