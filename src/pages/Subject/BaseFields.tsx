/**
 * Created by MIRZOEV A. on 01.06.2023
 */

import React, { memo } from "react";
import { Form, Input, Select } from "antd";
import { useQuery } from "@apollo/client";
import { GET_PLACE_LAYERS } from "../../operations";
import { GetPlaceLayersQuery } from "../../generated/graphql";
import { useRecoilValue } from "recoil";
import { placeAtom } from "../../atoms/selectedPlace";
import ScheduleField from "../../components/FormFields/SheduleField";

const { Option } = Select;

const { Item } = Form;

const BaseFields = memo(({}) => {
  const placeId = useRecoilValue(placeAtom);

  const { data, loading, error } = useQuery<GetPlaceLayersQuery>(
    GET_PLACE_LAYERS,
    { variables: { placeUuid: placeId! } }
  );

  return (
    <div className="card grid grid-cols-2 divide-x py-6">
      <div className="flex flex-col gap-3 px-6">
        <Item
          label="Название"
          name="name"
          className="m-0"
          rules={[{ required: true, message: "Введите название!" }]}
        >
          <Input />
        </Item>

        <Item
          className="m-0"
          label="Краткое описание"
          name="shortDescription"
          rules={[{ required: true, message: "Введите краткое описание!" }]}
        >
          <Input />
        </Item>

        <Item
          name="layerUuid"
          label="Этаж"
          rules={[{ required: true, message: "Выберите этаж!" }]}
        >
          <Select
            placeholder="Выберите этаж"
            allowClear
            options={data?.placeLayers.map(({ uuid, fullName }) => ({
              value: uuid,
              label: fullName,
            }))}
          />
        </Item>
      </div>
      <div className="flex flex-col gap-3 px-6">
        <ScheduleField />

        <Item
          label="Официальный сайт"
          name="site"
          rules={[{ required: true, message: "Введите сайт!" }]}
        >
          <Input />
        </Item>
      </div>
    </div>
  );
});

export default BaseFields;
