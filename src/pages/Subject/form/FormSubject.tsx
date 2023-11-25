/**
 * Created by MIRZOEV A. on 25.11.2023
 */

import React, { memo, useCallback } from "react";
import TemplateTabs from "./template/TemplateTabs";
import { Button, Form } from "antd";
import { Color } from "antd/es/color-picker";
import { prepareColor } from "../../../utils/utils";
import { prepareFieldsToSend } from "./helper";
import { GET_SUBJECTS } from "../../../operations/subject/query";
import { useMutation, useQuery } from "@apollo/client";
import { GET_TEMPLATE_BY_ID } from "../../../operations/template/query";
import { CREATE_SUBJECT } from "../../../operations/subject/mutation";
import { useNavigate, useParams } from "react-router";
import { useRecoilValue } from "recoil";
import { placeAtom } from "../../../atoms/selectedPlace";
import { Query } from "../../../generated/graphql";
import { UploadFile } from "antd/es/upload/interface";
import {
  SCHEDULE_DAYS,
  ScheduleOption,
} from "../../../components/FormFields/types";
import DefaultFields from "./DefaultFields";

interface SubjectFormProps {}

interface SubjectFormValues {
  name: string;
  shortDescription: string;
  layerUuid: string;
  logo: Array<UploadFile>;
  site: string;
  schedule: Map<SCHEDULE_DAYS, ScheduleOption>;
  images: Array<UploadFile>;
  fields: Array<any>;
}

type TemplateById = { template: Query["template"] };

const { Item } = Form;

const FormSubject = memo<SubjectFormProps>(({}) => {
  const { templateId } = useParams();
  const navigate = useNavigate();
  const placeUuid = useRecoilValue(placeAtom);

  const { data } = useQuery<TemplateById>(GET_TEMPLATE_BY_ID, {
    variables: { uuid: templateId! },
  });

  const [createSubject, { error, loading }] =
    useMutation<SubjectFormValues>(CREATE_SUBJECT);

  const kek = (values: any) => {
    console.log(values);
    // console.log(prepareFieldsToSend(values.tabs));
  };

  const onFinish = useCallback(
    async ({
      logoBackgroundColor,
      images,
      logo,
      schedule,
      site,
      fields,
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
            content: {
              ...prepareFieldsToSend(fields),
              templateUuid: templateId,
            },
          },
        },
        refetchQueries: [GET_SUBJECTS, "GetSubjectsOfPlace"],
      });
      navigate("..");
    },
    [placeUuid]
  );

  return (
    <Form
      name="subjectForm"
      layout="vertical"
      className="flex card flex-col gap-6 p-6"
      onFinish={kek}
    >
      <DefaultFields />
      <Form.List name="tabs">
        {() => <TemplateTabs data={data?.template?.tabs ?? []} />}
      </Form.List>

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
  );
});

export default FormSubject;
