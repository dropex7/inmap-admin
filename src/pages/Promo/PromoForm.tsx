/**
 * Created by MIRZOEV A. on 15.08.2023
 */

import React, { useState } from "react";
import { Button, Steps, theme, message, Form, Input } from "antd";
import PromoMainPart from "./PromoMainPart";
import PromoDescription from "./PromoDescription";
import StepActions from "./StepActions";
import { useRecoilValue } from "recoil";
import { placeAtom } from "../../atoms/selectedPlace";

export function Component() {
  const [current, setCurrent] = useState(0);
  const [mainFormValues, setMainFormValues] = useState({});

  const isMainPart = current === 0;

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "Основная информация",
      content: <PromoMainPart />,
    },
    {
      title: "Описание",
      content: <PromoDescription />,
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  const onFinishMainPart = (values: any) => {
    setMainFormValues(values);
    next();
  };

  const onFinish = (values: any) => {
    console.log({ ...values, ...mainFormValues });
  };

  return (
    <div className="card p-6">
      <Form
        labelCol={{ span: 6 }}
        onFinish={isMainPart ? onFinishMainPart : onFinish}
      >
        <Steps current={current} items={items} />
        <div className="py-10">{steps[current].content}</div>

        <StepActions isMainPart={isMainPart} toPrev={prev} />
      </Form>
    </div>
  );
}
