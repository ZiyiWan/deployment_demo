import { Col, Row } from "antd";
import React from "react";
import { ChartDemo } from "./patientLineChart";

function InfectionPrevention() {
  return (
    <Row gutter={[24, 16]}>
      <Col span={12}>
        - to be used by infection prevention staff (often a specialist group of
        nurses) <br />- it will display a “map” of where the selected patient
        has been in the hospital during their stay .. which wards … and which
        beds in those wards
      </Col>
      <Col span={12}>
        - the map should be able to be filtered by dates to show all of the
        patients admission… or just sub sets of it
      </Col>

      <Col span={24}>
        A map here? but how to show the map info need to be clarified
        
      </Col>
    </Row>
  );
}

export default InfectionPrevention;
