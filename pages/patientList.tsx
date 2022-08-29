import { Breadcrumb, Button, Col, Layout, Menu, Row } from "antd";
import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { Typography } from "antd";
import {
  getPatientById,
  getPatientList,
  getPatientsByName,
} from "../apiservice/axios";
import { Table } from "antd";
import Link from "next/link";

function PatientList() {
  const [dataSource, setDataSource] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  //const [searchFlag, setSearchFlag] = useState(false);
  const [searchingField, setSearchingField] = useState("");
  const [isId, setIsId] = useState(Boolean);
  const [loading, setLoading] = useState(true);

  const { Header, Content, Footer } = Layout;
  const { Search } = Input;
  const { Title } = Typography;

  useEffect(() => {
    getPatientList(currentPage).then((res: any) => {
      console.log("Response in ini: " + res);
      //console.log(res[0].resource.name[0].given[0]);
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
        }else{
          let info = {
            id: patient.resource.id,
            name:"Unknow",
            //name: patient.resource.name[0].given[0],
            birthDate: patient.resource.birthDate,
            gender: patient.resource.gender,
          };
          data.push(info);
        }
      });
      setDataSource(data);
      setLoading(false);
    });
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      key: "name",
      render: (record: any) => (
        <Link href={`/patient/`+record.id}>
          <a>{record.name}</a>
        </Link>
      ),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "BirthDate",
      dataIndex: "birthDate",
      key: "birthDate",
    },
  ];

  async function onSearch(value: string) {
    console.log("Search on Click");
    console.log("Input value: " + value);
    console.log(value.length);
    var isID: boolean = /^[0-9]*$/.test(value);
    if (value.length === 0) {
      setIsId(false);
      console.log("Should go in none ID");
    } else {
      setIsId(isID);
    }
    //setSearchFlag(true);
    setSearchingField(value);
    console.log("isId:" + isId);
    console.log("isID:" + isID);
    if (isId) {
      console.log("Go in Id search");
      //const patientID = parseInt(searchingField);
      const data = await getPatientById(searchingField).then((res: any) => {
        console.log("Response in ID Search :" + res);
        //console.log(res[0].resource.name[0].given[0]);
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
        return data;
      });
      console.log("after result");
      setDataSource(data);
    } else {
      if (searchingField) {
        console.log("Go in Name search");
        const data = await getPatientsByName(searchingField, currentPage)
          .then((res: any) => {
            console.log("Response in Name Search: " + res);
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
            return data;
          })
          .catch((err: any) => {
            console.log("ERROR: " + err);
          });
        setDataSource(data);
      } else {
        console.log("Go in Empty search");
        const data = await getPatientList(currentPage).then((res: any) => {
          console.log("Response in empty Search: " + res);
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
          return data;
        });
        setDataSource(data);
      }
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
          }else{
            let info = {
              id: patient.resource.id,
              name:"Unknow",
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
      </Header>
      <Row justify="center">
        <Col span={14}>
          <Content style={{ padding: "0 50px", width: "100vh" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
            </Breadcrumb>
            <Title type="secondary">Search Patient</Title>
            <Search
              placeholder="search patient by name"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
            <Table
              dataSource={dataSource}
              columns={columns}
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
