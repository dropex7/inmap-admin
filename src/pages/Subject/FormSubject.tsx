/**
 * Created by MIRZOEV A. on 11.04.2023
 */
import { Button, Form, Typography } from "antd";
import React, { useCallback } from "react";
import type { Color } from "antd/es/color-picker";
import { UploadFile } from "antd/es/upload/interface";
import { prepareColor } from "../../utils/utils";
import { useRecoilValue } from "recoil";
import { placeAtom } from "../../atoms/selectedPlace";
import {
  SCHEDULE_DAYS,
  ScheduleOption,
} from "../../components/FormFields/types";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router";
import { GET_SUBJECTS } from "../../operations/subject/query";
import { CREATE_SUBJECT } from "../../operations/subject/mutation";
import DefaultSubjectTemplate from "./DefaultSubjectTemplate";
import { Query, TemplateLocalizedModel } from "../../generated/graphql";
import {
  GET_TEMPLATE_BY_ID,
  GET_TEMPLATES,
} from "../../operations/template/query";
import TemplateTabs from "../Template/TemplateTabs";
import { prepareFieldsToSend } from "./helper";

interface SubjectFormValues {
  name: string;
  shortDescription: string;
  layerUuid: string;
  logo: Array<UploadFile>;
  site: string;
  schedule: Map<SCHEDULE_DAYS, ScheduleOption>;
  images: Array<UploadFile>;
  content: Array<any>;
}

const { Item, useForm } = Form;
const { Title } = Typography;

type TemplateById = { template: Query["template"] };

export function Component() {
  const [form] = useForm();
  const { templateId } = useParams();
  const placeUuid = useRecoilValue(placeAtom);
  const navigate = useNavigate();

  const { data } = useQuery<TemplateById>(GET_TEMPLATE_BY_ID, {
    variables: { uuid: templateId! },
  });

  const [createSubject, { error, loading }] =
    useMutation<SubjectFormValues>(CREATE_SUBJECT);

  const kek = ({ fields }: any) => {
    console.log("fields", fields);
    console.log("prepare", prepareFieldsToSend(fields));
  };

  const onFinish = useCallback(
    async ({
      logoBackgroundColor,
      images,
      logo,
      schedule,
      site,
      content,
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
          },
        },
        refetchQueries: [GET_SUBJECTS, "GetSubjectsOfPlace"],
      });
      navigate("..");
    },
    [placeUuid]
  );

  return (
    <div className="p-6">
      <div className="flex justify-between pb-3">
        <Title level={3}>Создание объекта</Title>
      </div>

      <Form
        form={form}
        name="subjectForm"
        layout="vertical"
        className="flex flex-col gap-3"
        onFinish={kek}
      >
        {/*<DefaultSubjectTemplate />*/}
        <TemplateTabs data={data?.template?.tabs ?? []} />
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
