/**
 * Created by MIRZOEV A. on 15.08.2023
 */

import React, { useState } from "react";
import { Steps } from "antd";
import PromoMainPart from "./PromoMainPart";
import PromoDescription from "./PromoDescription";
import { UploadFile } from "antd/es/upload/interface";
import { useMutation } from "@apollo/client";
import { CREATE_PROMO } from "../../operations/promo/mutation";
import { useRecoilValue } from "recoil";
import { placeAtom } from "../../atoms/selectedPlace";
import { useNavigate } from "react-router";
import { GET_PROMOS } from "../../operations/promo/query";

export interface IMainFormValues {
  title: string;
  subtitle: string;
  imageUrl: UploadFile[];
}

export interface IFullFormValues extends IMainFormValues {
  content: Record<string, any>;
}

export function Component() {
  const placeUuid = useRecoilValue(placeAtom);
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [mainFormValues, setMainFormValues] = useState<IMainFormValues>();
  const [createPromo, { error, loading }] =
    useMutation<IFullFormValues>(CREATE_PROMO);

  const isMainPart = current === 0;

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onFinishMainPart = (values: any) => {
    setMainFormValues(values);
    next();
  };

  const onFinish = async (values: IFullFormValues) => {
    const fullFormValues: any = {
      ...values,
      ...{
        ...mainFormValues,
        imageUrl: mainFormValues?.imageUrl?.[0].url,
      },
    };

    await createPromo({
      variables: {
        createPromoInput: { ...fullFormValues, placeUuid },
      },
      refetchQueries: [GET_PROMOS, "GetListOfPromosQuery"],
      onCompleted: () => {
        navigate("..");
      },
    });
  };

  const steps = [
    {
      title: "Основная информация",
      content: (
        <PromoMainPart
          onFinish={onFinishMainPart}
          initialValues={mainFormValues}
        />
      ),
    },
    {
      title: "Описание",
      content: <PromoDescription toPrev={prev} onFinish={onFinish} />,
    },
  ];

  const items = steps.map((item) => ({ key: item.title, title: item.title }));

  return (
    <div className="card p-6">
      <Steps current={current} items={items} />
      <div className="py-10">{steps[current].content}</div>
    </div>
  );
}
