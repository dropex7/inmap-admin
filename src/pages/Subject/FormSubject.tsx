/**
 * Created by MIRZOEV A. on 11.04.2023
 */
import { Button, ColorPicker, Form, Typography } from "antd";
import { ReactElement, useMemo } from "react";
import BaseFields from "./BaseFields";
import ImageLoaderField from "../../components/FormFields/ImageLoaderField";
import React, { useCallback, useState } from "react";
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
import { useNavigate } from "react-router";
import { ExtraField } from "./types";
import NewFieldForm from "./NewFieldForm";
import { GET_SUBJECTS } from "../../operations/subject/query";
import { CREATE_SUBJECT } from "../../operations/subject/mutation";

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
  const navigate = useNavigate();
  const [extraFields, setExtraFields] = useState<Map<string, ReactElement>>(
    new Map()
  );

  const [preparedExtraFields, setPreparedExtraFields] = useState<
    Array<ExtraField>
  >([]);

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
            images: images?.map((image) => image.url),
            logo: logo[0].url,
            logoBackgroundColor: prepareColor(logoBackgroundColor),
            fields: [],
          },
        },
        refetchQueries: [GET_SUBJECTS, "GetSubjectsOfPlace"],
      });
      navigate("..");
    },
    [placeUuid]
  );

  const addNewField = useCallback(
    (elementId: string, newField: ReactElement) => {
      setExtraFields((prev) => {
        const tempSet = new Map(prev);
        return tempSet.set(elementId, newField);
      });
    },
    []
  );

  const removeNewField = useCallback((elementId: string) => {
    setExtraFields((prev) => {
      const tempSet = new Map(prev);
      tempSet.delete(elementId);
      return tempSet;
    });
  }, []);

  const renderElements = useMemo(
    () => Array.from(extraFields.values()),
    [extraFields]
  );

  // if (loading) return "Submitting...";
  // if (error) return `Submission error! ${error.message}`;

  return (
    <div className="p-6">
      <div className="flex justify-between pb-3">
        <Title level={3}>Создание объекта</Title>
        <NewFieldForm
          addNewField={addNewField}
          removeNewField={removeNewField}
        />
      </div>

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

        {renderElements}

        <Item>
          <Button
            type="primary"
            size="large"
            htmlType="submit"
            className="w-full"
          >
            Создать
          </Button>
        </Item>
      </Form>
    </div>
  );
}
