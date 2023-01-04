import { Badge, Descriptions, Space, Tag, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import React, { useEffect, useState } from "react";
import { getAllergyById, getPatientById } from "../apiservice/axios";
import { PatientData } from "../dataModel/dataModel";

function PatientInfo(props: any) {
  const [patient, setPatient] = useState<PatientData>();
  const [address, SetAddress] = useState("");
  const [telecom, setTelecom] = useState("");
  const [allergyList, setAllergyList] = useState([""]);
  useEffect(() => {
    getPatientById(props.id)
      .then((res: any) => {
        //console.log(res[0].resource);
        let address = "";
        let contactNum = "";
        if ("address" in res[0].resource) {
          let addressList = res[0].resource.address[0];
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
        if ("telecom" in res[0].resource) {
          contactNum = res[0].resource.telecom[0].value;
        } else {
          contactNum = "Unknow";
        }
        setTelecom(contactNum);
        SetAddress(address);
        setPatient(res[0].resource);
      })
      .catch((error: any) => {
        console.log(error);
      });
    getAllergyById(props.id).then((res: any) => {
      console.log(res.data);
      let allergyData = [""];
      if (res.data.total > 0) {
        for (let index = 0; index < res.data.entry.length; index++) {
          allergyData.push(
            res.data.entry[index].resource.code.coding[0].display
          );
        }
      } else {
        allergyData.push("No allergens were recorded");
      }
      console.log(allergyData.slice(1));
      allergyData = allergyData.slice(1);
      setAllergyList(allergyData);
    });
  }, []);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      render: (text: any) => <a>{text}</a>,
    },
    {
      title: "Medication",
      dataIndex: "medication",
      key: "medication",
    },
    {
      title: "Last Updated",
      dataIndex: "lastUpdated",
      key: "lastUpdated",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (record: any) => (
        <>
          <Tag color="green">{record}</Tag>
        </>
      ),
    },
    // {
    //   title: "Action",
    //   key: "action",
    //   render: (record: any) => (
    //     <Space size="middle">
    //       <a>Some action</a>
    //       <a>Delete</a>
    //     </Space>
    //   ),
    // },
  ];

  const data = [
    {
      key: "1",
      id: "1091799",
      medication: "Amoxicillin 50 MG Injection",
      status: "Complete",
      lastUpdated:"2021-04-29T13:59:00.910+10:00",
    },
    {
      key: "2",
      id: "1091802",
      medication: "Doxycycline 100 MG Injection",
      status: "Complete",
      lastUpdated:"2021-04-29T13:59:00.910+10:00",
    },
    {
      key: "3",
      id: "1091860",
      medication: "cephalexin 50 MG Injection",
      status: "Complete",
      lastUpdated:"2021-04-29T13:59:00.910+10:00",
    },
    {
      key: "4",
      id: "1091973",
      medication: "Ciprofloxacin 50 MG Injection",
      status: "Complete",
      lastUpdated:"2021-04-29T13:59:00.910+10:00",
    },
  ];

  const Des: React.FC = () => (
    <>
    <h2 style={{margin:"20px 35px", }}>Patient Information</h2>
      <Descriptions bordered style={{ margin: "20px" }} column={2}>
        <Descriptions.Item label="Full Name ">
          {patient?.name[0].given + " " + patient?.name[0].family}
        </Descriptions.Item>
        <Descriptions.Item label="Gender">{patient?.gender}</Descriptions.Item>
        <Descriptions.Item label="Date of Birth">
          {patient?.birthDate}
        </Descriptions.Item>
        <Descriptions.Item label="Contect Number">{telecom}</Descriptions.Item>
        <Descriptions.Item label="Last Updated">
          {patient?.meta.lastUpdated}
        </Descriptions.Item>
        <Descriptions.Item label="Address" span={2}>
          {address}
        </Descriptions.Item>
        <Descriptions.Item label="Allergies" span={3}>
          {allergyList.map((allergy: any) => {
            return allergy === "No allergens were recorded" ? (
              <>
                <Badge status="error" text={allergy} />
                <br />
              </>
            ) : (
              <>
                <Badge status="warning" text={allergy} />
                <br />
              </>
            );
          })}
        </Descriptions.Item>
      </Descriptions>
      <Table
        columns={columns}
        dataSource={data}
        style={{ margin: "20px" }}
        title={() => {
          return <h2>Antibiotic History</h2>;
        }}
      />
      ;
    </>
  );
  return <Des />;
}

export default PatientInfo;
