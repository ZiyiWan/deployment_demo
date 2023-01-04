import { Tag } from "antd";
import Link from "next/link";

export const columnsOfMedRequest = [
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
    title: "Status",
    key: "status",
    render: (record: any) => {
      if (record.status === "stopped") {
        return <Tag color="red">{record.status}</Tag>;
      } else {
        return <Tag color="green">{record.status}</Tag>;
      }
    },
  },
];

export const columnOfPatientList = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Name",
    key: "name",
    render: (record: any) => (
      <Link href={`/patient/` + record.id}>
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

