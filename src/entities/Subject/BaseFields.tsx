/**
 * Created by MIRZOEV A. on 01.06.2023
 */

import { memo } from "react";
import { Form, Input, Select } from "antd";
import { useQuery } from "@apollo/client";
import { GET_PLACE_LAYERS } from "../../operations";
import { GetPlaceLayersQuery } from "../../generated/graphql";
import { useRecoilValue } from "recoil";
import { placeAtom } from "../../atoms/selectedPlace";

const { Option } = Select;

const { Item } = Form;

const BaseFields = memo(({}) => {
  const placeId = useRecoilValue(placeAtom);

  const { data, loading, error } = useQuery<GetPlaceLayersQuery>(
    GET_PLACE_LAYERS,
    { variables: { placeUuid: placeId! } }
  );

  return (
    <div className="card flex flex-col gap-3 p-6">
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
        ></Select>
      </Item>
    </div>
  );
});

export default BaseFields;
