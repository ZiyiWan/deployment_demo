import { Col, Row } from "antd";
import React from "react";
import { ChartDemo } from "./patientLineChart";

function PatientDetailInfo() {
  return (
    <Row gutter={[24, 16]}>
      <Col span={12}>
        - shows all the relevant clinical details about the chosen patient{" "}
        <br />- including the clinical predictions that are produced by the
        system{" "}
      </Col>
      <Col span={12}>
        - will also include a (limited) history of the various predictions over
        time or the ability to filter back across the various predictions as
        they change over time within a given patient admission
      </Col>

      <Col span={24}>
        A Chart maybe...?
        <ChartDemo />
      </Col>
    </Row>
  );
}

export default PatientDetailInfo;
