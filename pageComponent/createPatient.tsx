// pages/index.tsx
import { useState } from "react";
import React from "react";
import { Button, DatePicker, Form, Input, Modal, Select } from "antd";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import patientInfo from "../dataModel/dataModel";
import axios from "axios";
import { PlusOutlined } from "@ant-design/icons/lib/icons";

function CreateButton() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [open, setOpen] = useState(false);
  const [phoneinput, setPhoneinput] = useState<any>();
  const { Option } = Select;

  const config = {
    rules: [
      {
        type: "object" as const,
        required: true,
        message: "Please select time!",
      },
    ],
  };

  function generatePatientObj(patient: patientInfo) {
    const patientObj = {
      name: [
        {
          use: "official",
          family: patient.lastname,
          given: [patient.firstname],
        },
      ],
      gender: patient.gender,
      birthDate: patient.DOB,
      resourceType: "Patient",
      email: patient.email,
      address: [
        {
          use: "home",
          line: [patient.line1],
          city: patient.city,
          state: patient.state,
          postalCode: patient.postal,
          country: patient.country,
        },
      ],
      telecom: [
        {
          system: "phone",
          value: patient.phonenum,
          use: "home",
        },
      ],
    };
    return patientObj;
  }

  interface CollectionCreateFormProps {
    open: boolean;
    onCreate: (values: any) => void;
    onCancel: () => void;
  }
  const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
    open,
    onCreate,
    onCancel,
  }) => {
    const [form] = Form.useForm();
    return (
      <Modal
        open={open}
        title="Create a new collection"
        okText="Create"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={() => {
          form
            .validateFields()
            .then((values) => {
              form.resetFields();
              onCreate(values);
            })
            .catch((info) => {
              console.log("Validate Failed:", info);
            });
        }}
      >
        <Form form={form} layout="horizontal" name="form_in_modal">
          <Form.Item
            name="firstname"
            rules={[
              { required: true, message: "Please input your First Name!" },
            ]}
            style={{ display: "inline-block", width: "calc(50% - 12px)" }}
          >
            <Input placeholder="First Name" />
          </Form.Item>
          <span
            style={{
              display: "inline-block",
              width: "24px",
              lineHeight: "32px",
              textAlign: "center",
            }}
          ></span>
          <Form.Item
            name="lastname"
            rules={[
              { required: true, message: "Please input your Last Name!" },
            ]}
            style={{ display: "inline-block", width: "calc(50% - 12px)" }}
          >
            <Input placeholder="Last Name" />
          </Form.Item>
          <Form.Item name="email" rules={[{ required: true, type: "email" }]}>
            <Input placeholder="Email Address" />
          </Form.Item>
          <Form.Item
            name="phonenum"
            rules={[
              { required: true, message: "Please input your Phone number" },
            ]}
          >
            <PhoneInput
              placeholder="Enter phone number"
              defaultCountry="AU"
              value={phoneinput}
              onChange={() => {}}
            />
          </Form.Item>
          <Form.Item
            name="DOB"
            label="Date of Birth"
            {...config}
            style={{ display: "inline-block", width: "calc(60% - 12px)" }}
          >
            <DatePicker />
          </Form.Item>
          <span
            style={{
              display: "inline-block",
              width: "24px",
              lineHeight: "32px",
              textAlign: "center",
            }}
          ></span>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[{ required: true, message: "Please select gender!" }]}
            style={{ display: "inline-block", width: "calc(40% - 12px)" }}
          >
            <Select>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
          Address:
          <Form.Item
            name="line1"
            style={{ paddingTop: "3px" }}
            rules={[{ required: true, message: "Please input your address" }]}
          >
            <Input placeholder="line 1" />
          </Form.Item>
          <Form.Item
            name="city"
            rules={[{ required: true, message: "Please input your address" }]}
          >
            <Input placeholder="City" />
          </Form.Item>
          <Form.Item
            name="state"
            rules={[{ required: true, message: "Please input your address" }]}
          >
            <Input placeholder="State" />
          </Form.Item>
          <Form.Item
            name="postal"
            rules={[{ required: true, message: "Please input your address" }]}
          >
            <Input placeholder="postal/Zip code" />
          </Form.Item>
          <Form.Item
            name="country"
            rules={[{ required: true, message: "Please input your address" }]}
          >
            <Input placeholder="Country" />
          </Form.Item>
        </Form>
      </Modal>
    );
  };
  const sendMessage = async (num: string, msg: string) => {
    //  e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);
    const res = await fetch("/api/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone: num, message: msg }),
    });
    const apiResponse = await res.json();

    if (apiResponse.success) {
      setSuccess(true);
    } else {
      setError(true);
    }
    setLoading(false);
  };

  const onCreate = async (values: any) => {
    values = {
      ...values,
      DOB: values["DOB"].format("YYYY-MM-DD"),
    };
    let patientObj = generatePatientObj(values);
    let formatNumList: any = [];
    console.log("Received values of form: ", values);
    console.log("Patient Obj :", patientObj.telecom[0].value);
    console.log("Patient Obj :", patientObj.telecom[0].value.split(""));
    for (
      let index = 0;
      index < patientObj.telecom[0].value.split("").length;
      index++
    ) {
      formatNumList.push(patientObj.telecom[0].value.split("")[index]);
      if ((index + 1) % 3 === 0 && index !== 11) {
        formatNumList.push(" ");
      }
    }
    console.log(formatNumList.join(""));
    console.log(patientObj);
    axios
      .post(
        "http://hapi.fhir.org/baseR4/Patient?_format=json&_pretty=true",
        patientObj
      )
      .then(function (response) {
        console.log(response);
        if (response.status === 201) {
          console.log("Successfully");
          let msg =
            "Dear " +
            patientObj.name[0].given +
            ", You have registered successfully! Your patient ID is: " +
            response.data.id;
          sendMessage(patientObj.telecom[0].value, msg);
          alert("Succsee!");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    setOpen(false);
  };

  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setOpen(true);
        }}
        style={{marginTop:"18px"}}
        icon={<PlusOutlined />}
      >
        New Patient
      </Button>
      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </div>
  );
}

export default CreateButton;
