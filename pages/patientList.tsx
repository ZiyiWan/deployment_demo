import { Breadcrumb, Col, Layout, Menu, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { Typography } from "antd";
import {
  getPatientById,
  getPatientList,
  getPatientsByName,
} from "../apiservice/axios";
import { Table } from "antd";
import { columnOfPatientList } from "../pageComponent/tableComponents";

function PatientList(props: any) {
  const [dataSource, setDataSource] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchingField, setSearchingField] = useState("");
  const [loading, setLoading] = useState(true);

  const { Header, Content, Footer } = Layout;
  const { Search } = Input;
  const { Title } = Typography;

  useEffect(() => {
    getPatientList(currentPage).then((res: any) => {
      console.log("Response in ini: ", res);
      //console.log(res[0].resource.name[0].given[0]);
      const patients = res.map((patient: any) => {
        return {
          id: patient.resource.id,
          // want to correct the spelling below?
          name:
            "name" in patient.resource
              ? patient.resource.name[0].given[0]
              : "Unknow",
          birthDate: patient.resource.birthDate,
          gender: patient.resource.gender,
        };
      });
      setDataSource(patients);
      setLoading(false);
    });
  }, []);

  async function onSearch(value: string) {
    console.log("Search on Click");
    console.log("Input value: " + value);
    var isID: boolean = /^[0-9]*$/.test(value);
    if (isID && value.length !== 0) {
      console.log("Should search by id");
      getPatientById(value).then((res: any) => {
        console.log("Searched by ID: ", res);
        const patients = res.map((patient: any) => {
          return {
            id: patient.resource.id,
            // want to correct the spelling below?
            name:
              "name" in patient.resource
                ? patient.resource.name[0].given[0]
                : "Unknow",
            birthDate: patient.resource.birthDate,
            gender: patient.resource.gender,
          };
        });
        setDataSource(patients);
      });
    } else {
      console.log("Should search by name");
    }
  }

  function onPageChange(page: number) {
    console.log(page);
    var props = (page - 1) * 10;
    if (!searchingField) {
      //console.log("flag sss:" + searchFlag);
      getPatientList(props).then(function (res: any) {
        console.log("page:" + res);
        console.log("page info:" + res[0].resource.name[0].given[0]);
        const data: any = [];
        res.map((patient: any) => {
          if ("name" in patient.resource) {
            let info = {
              id: patient.resource.id,
              //name:"test",
              name: patient.resource.name[0].given[0],
              birthDate: patient.resource.birthDate,
              gender: patient.resource.gender,
            };
            data.push(info);
          } else {
            let info = {
              id: patient.resource.id,
              name: "Unknow",
              //name: patient.resource.name[0].given[0],
              birthDate: patient.resource.birthDate,
              gender: patient.resource.gender,
            };
            data.push(info);
          }
        });
        setDataSource(data);
      });
    } else {
      getPatientsByName(searchingField, currentPage).then((res: any) => {
        //console.log("flag sss:" + searchFlag);
        console.log(res);
        console.log(res[0].resource.name[0].given[0]);
        const data: any = [];
        res.map((patient: any) => {
          let info = {
            id: patient.resource.id,
            name: patient.resource.name[0].given[0],
            birthDate: patient.resource.birthDate,
            gender: patient.resource.gender,
          };
          data.push(info);
        });

        setDataSource(data);
      });
    }
  }

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" />
        <p style={{ color: "white", fontSize: "20px" }}>
          Welcome, {props?.username} {props.children}
        </p>
      </Header>
      <Row justify="center">
        <Col span={14}>
          <Content style={{ padding: "0 50px", width: "100vh" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
            </Breadcrumb>
            <Row justify="space-between">
              <Col>
                <Title type="secondary">Search Patient</Title>
              </Col>
              {/* <Col>
                <CreateButton />
              </Col> */}
            </Row>
            <Search
              placeholder="search patient by name or id"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
            <Table
              dataSource={dataSource}
              columns={columnOfPatientList}
              style={{ marginTop: "8px" }}
              loading={loading}
              pagination={{
                defaultPageSize: 10,
                total: 122951,
                onChange: (page) => {
                  onPageChange(page);
                  setCurrentPage(page);
                },
              }}
            />
          </Content>
        </Col>
      </Row>
      <Footer style={{ textAlign: "center" }}>Fhir info render test</Footer>
    </Layout>
  );
}

export default PatientList;
