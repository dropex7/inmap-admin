/**
 * Created by MIRZOEV A. on 14.11.2023
 */

import React, { memo } from "react";
import ImageLoaderField from "../../../components/FormFields/ImageLoaderField";
import { ColorPicker, Form, Input, Select } from "antd";
import { useRecoilValue } from "recoil";
import { placeAtom } from "../../../atoms/selectedPlace";
import { useQuery } from "@apollo/client";
import { GetPlaceLayersQuery } from "../../../generated/graphql";
import { GET_PLACE_LAYERS } from "../../../operations/place/query";
import ScheduleField from "../../../components/FormFields/SheduleField";

const { Item } = Form;

const DefaultFields = memo(() => {
  const placeId = useRecoilValue(placeAtom);

  const { data, loading, error } = useQuery<GetPlaceLayersQuery>(
    GET_PLACE_LAYERS,
    { variables: { placeUuid: placeId! } }
  );

  return (
    <>
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
        </div>
      </div>
      <div className="grid grid-cols-[1fr_2fr] gap-3">
        <div className="flex card flex-col p-6">
          <ImageLoaderField
            fieldName="logo"
            countOfImages={1}
            label="Добавьте логотип объекта"
          />
          <Item
            label="Цвет фона логотипа"
            name="logoBackgroundColor"
            rules={[
              { required: true, message: "Выберите цвет фона логотипа!" },
            ]}
          >
            <ColorPicker />
          </Item>
        </div>
        <div className="card p-6">
          <ImageLoaderField
            fieldName="images"
            countOfImages={10}
            label="Добавьте изображения"
          />
        </div>
      </div>
    </>
  );
});

export default DefaultFields;
