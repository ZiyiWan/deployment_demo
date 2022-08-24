import { Button, Modal, Tag } from "antd";
import { useState } from "react";


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


