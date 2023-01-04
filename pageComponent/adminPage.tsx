import { Button, Input, message, Result, Steps } from "antd";
import React, { useState } from "react";
function Admin() {
  const { Step } = Steps;

  const steps = [
    {
      title: "Input FHIR Server",
      content: (
        <div>
          Please input the FHIR server ULR:
          <Input></Input>
        </div>
      ),
    },
    {
      title: "Output FHIR Server",
      content: (
        <div>
          Please input the FHIR server ULR:
          <Input></Input>
        </div>
      ),
    },
    {
      title: "Last",
      content: (
        <Result
          status="success"
          title="Successful!"
          extra={[
            <Button type="primary" key="console">
              Go Console
            </Button>,
          ]}
        />
      ),
    },
  ];

  const App: React.FC = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
      setCurrent(current + 1);
    };

    const prev = () => {
      setCurrent(current - 1);
    };

    return (
      <div style={{ margin: "20px" }}>
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-content">{steps[current].content}</div>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps.length - 1 && (
            <Button
              type="primary"
              onClick={() => message.success("Processing complete!")}
            >
              Done
            </Button>
          )}
          {current > 0 && (
            <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
              Previous
            </Button>
          )}
        </div>
      </div>
    );
  };
  return <App />;
}

export default Admin;
