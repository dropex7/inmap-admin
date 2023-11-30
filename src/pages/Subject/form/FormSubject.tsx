/**
 * Created by MIRZOEV A. on 25.11.2023
 */

import type {Color} from 'antd/es/color-picker';
import type {UploadFile} from 'antd/es/upload/interface';

import {useMutation, useQuery} from '@apollo/client';
import {Button, Form} from 'antd';
import {memo, useCallback} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

import type {SCHEDULE_DAYS, ScheduleOption} from '../../../components/FormFields/types';
import type {Query} from '../../../generated/graphql';

import {placeAtom} from '../../../atoms/selectedPlace';
import {CREATE_SUBJECT} from '../../../operations/subject/mutation';
import {GET_SUBJECTS} from '../../../operations/subject/query';
import {GET_TEMPLATE_BY_ID} from '../../../operations/template/query';
import {prepareColor} from '../../../utils/utils';
import DefaultFields from './DefaultFields';
import {prepareFieldsToSend} from './helper';
import TemplateTabs from './template/TemplateTabs';

interface SubjectFormValues {
    images: Array<UploadFile>;
    layerUuid: string;
    logo: Array<UploadFile>;
    name: string;
    schedule: Map<SCHEDULE_DAYS, ScheduleOption>;
    shortDescription: string;
    site: string;
    tabs: Array<any>;
}

type TemplateById = {template: Query['template']};

const {Item} = Form;

const FormSubject = memo(() => {
    const {id, templateId} = useParams();
    const navigate = useNavigate();
    const placeUuid = useRecoilValue(placeAtom);

    const {data} = useQuery<TemplateById>(GET_TEMPLATE_BY_ID, {
        variables: {uuid: templateId!},
    });

    const [createSubject] = useMutation<SubjectFormValues>(CREATE_SUBJECT);

    const onFinish = useCallback(
        async ({
            images,
            logo,
            logoBackgroundColor,
            schedule,
            tabs,
            ...values
        }: Omit<SubjectFormValues, 'logoBackgroundColor'> & {
            logoBackgroundColor: Color | string;
        }) => {
            await createSubject({
                refetchQueries: [GET_SUBJECTS, 'GetSubjectsOfPlace'],
                variables: {
                    createSubjectInput: {
                        ...values,
                        content: {
                            tabs: prepareFieldsToSend(tabs),
                            templateUuid: templateId,
                        },
                        images: images?.map(image => image.url),
                        logo: logo[0].url,
                        logoBackgroundColor: prepareColor(logoBackgroundColor),
                        placeUuid,
                        schedule: Object.fromEntries(schedule),
                    },
                },
            });
            navigate(`/subject/${id}`);
        },
        [createSubject, id, navigate, placeUuid, templateId],
    );

    return (
        <Form className="card flex flex-col gap-6 p-6" layout="vertical" name="subjectForm" onFinish={onFinish}>
            <DefaultFields />
            <Form.List name="tabs">{() => <TemplateTabs data={data?.template?.tabs ?? []} />}</Form.List>

            <Item>
                <Button className="w-full" htmlType="submit" size="large" type="primary">
                    Создать
                </Button>
            </Item>
        </Form>
    );
});

export default FormSubject;
