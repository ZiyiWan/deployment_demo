import { Badge, Descriptions } from "antd";
import React, { useEffect, useState } from "react";
import { getPatientById } from "../apiservice/axios";
import { PatientData } from "../dataModel/dataModel";

function PatientInfo(props: any) {
  const [patient, setPatient] = useState<PatientData>();
  const [address, SetAddress] = useState("");
  const [telecom, setTelecom] = useState("");
  useEffect(() => {
    getPatientById(props.id).then((res: any) => {
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
    });
  }, []);

  const Des: React.FC = () => (
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
        <Badge status="warning" text="Egg" />
      </Descriptions.Item>
    </Descriptions>
  );
  return <Des />;
}

export default PatientInfo;
