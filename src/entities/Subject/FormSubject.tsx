/**
 * Created by MIRZOEV A. on 11.04.2023
 */
import { Button, ColorPicker, Form, Input, Typography } from "antd";
import {v4} from 'uuid'
import BaseFields from "./BaseFields";
import ImageLoaderField from "../../components/FormFields/ImageLoaderField";
import React, { useCallback } from "react";
import ScheduleField from "../../components/FormFields/SheduleField";
import type { Color } from "antd/es/color-picker";
import { UploadFile } from "antd/es/upload/interface";
import { prepareColor } from "../../utils/utils";
import { useRecoilValue } from "recoil";
import { placeAtom } from "../../atoms/selectedPlace";
import {
  SCHEDULE_DAYS,
  ScheduleOption,
} from "../../components/FormFields/types";
import { useMutation } from "@apollo/client";
import {CREATE_SUBJECT, GET_SUBJECTS} from "../../operations";
import {useNavigate} from "react-router";

interface SubjectFormValues {
  name: string;
  shortDescription: string;
  layerUuid: string;
  logo: Array<UploadFile>;
  site: string;
  schedule: Map<SCHEDULE_DAYS, ScheduleOption>;
  images: Array<UploadFile>;
}

const { Item } = Form;
const { Title } = Typography;

export function Component() {
  const placeUuid = useRecoilValue(placeAtom);
  const navigate = useNavigate()
  const [createSubject, { error, loading }] =
    useMutation<SubjectFormValues>(CREATE_SUBJECT);

  const onFinish = useCallback(
    async ({
      logoBackgroundColor,
      images,
      logo,
      schedule,
      site,
      ...values
    }: Omit<SubjectFormValues, "logoBackgroundColor"> & {
      logoBackgroundColor: Color | string;
    }) => {
      await createSubject({
        variables: {
          createSubjectInput: {
            ...values,
            placeUuid,
            schedule: Object.fromEntries(schedule),
            images: images?.map((image) => ({uuid: v4(), baseEncodedImage: image.thumbUrl})),
            logo: logo[0].thumbUrl,
            logoBackgroundColor: prepareColor(logoBackgroundColor),
            fields: [],
          },
        },
        refetchQueries:[
          GET_SUBJECTS,
            'GetSubjectsOfPlace'
        ]
      });
      navigate('..')
    },
    [placeUuid]
  );

  // if (loading) return "Submitting...";
  // if (error) return `Submission error! ${error.message}`;

  return (
    <div className="p-6">
      <Title level={3}>Создание объекта</Title>

      <Form
        name="subjectForm"
        layout="vertical"
        className="flex flex-col gap-3"
        onFinish={onFinish}
      >
        <BaseFields />

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

        <div className="card p-6">
          <ScheduleField />

          <Item
            label="Официальный сайт"
            name="site"
            rules={[{ required: true, message: "Введите сайт!" }]}
          >
            <Input />
          </Item>
        </div>

        <Item>
          <Button type="primary" size="large" htmlType="submit">
            Создать объект
          </Button>
        </Item>
      </Form>
    </div>
  );
}
