/**
 * Created by MIRZOEV A. on 25.11.2023
 */

import type {Color} from 'antd/es/color-picker';

import {useMutation, useQuery} from '@apollo/client';
import {Button, Form} from 'antd';
import {memo, useCallback, useMemo} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {useRecoilValue} from 'recoil';

import type {SCHEDULE_DAYS} from '@/components/Shedule/types';
import type {Query} from '@/generated/graphql';

import {placeAtom} from '@/atoms/selectedPlace';
import {CREATE_SUBJECT, UPDATE_SUBJECT} from '@/operations/subject/mutation';
import {GET_SUBJECTS, GET_SUBJECTS_BY_ID} from '@/operations/subject/query';
import {GET_TEMPLATE_BY_ID} from '@/operations/template/query';
import {prepareSchedule} from '@/utils/utils';
import DefaultFields from './DefaultFields';
import {prepareFieldsToSend} from './helper';
import type {ScheduleFormInterval} from '@/components/Shedule/types';
import type {GetSubjectsByIdQuery} from '@/generated/graphql';
import {prepareDataForForm} from './prepareDataForForm';
import TemplateTabs from './template/TemplateTabs';
import type {ImageType} from '@/components/ImageLoader/ImageLoaderField.tsx';

interface FormProps {
    item?: GetSubjectsByIdQuery['subject'];
}

interface SubjectFormValues {
    images: Array<ImageType>;
    layerUuid: string;
    logo: Array<ImageType>;
    name: string;
    schedule: Record<SCHEDULE_DAYS, ScheduleFormInterval>;
    shortDescription: string;
    site: string;
    tabs: Array<any>;
}

type TemplateById = {template: Query['template']};

const {Item} = Form;

const FormSubject = memo<FormProps>(({item}) => {
    const {templateId} = useParams();
    const navigate = useNavigate();
    const placeUuid = useRecoilValue(placeAtom);
    const isCreate = !item?.uuid;

    const {data} = useQuery<TemplateById>(GET_TEMPLATE_BY_ID, {
        variables: {uuid: isCreate ? templateId! : item?.content?.templateUuid},
        skip: isCreate ? false : !item?.content?.templateUuid,
    });

    const [createSubject] = useMutation<SubjectFormValues>(CREATE_SUBJECT);
    const [updateSubject] = useMutation<SubjectFormValues>(UPDATE_SUBJECT);

    const initialValues = useMemo(() => (isCreate ? undefined : prepareDataForForm(item)), [isCreate, item]);

    // console.log(initialValues);

    const onFinish = useCallback(
        async ({
            images,
            logo,
            schedule,
            tabs,
            ...values
        }: Omit<SubjectFormValues, 'logoBackgroundColor'> & {
            logoBackgroundColor: Color | string;
        }) => {
            if (isCreate) {
                await createSubject({
                    refetchQueries: [GET_SUBJECTS, 'GetSubjectsOfPlace'],
                    variables: {
                        createSubjectInput: {
                            ...values,
                            content: {
                                tabs: prepareFieldsToSend(tabs),
                                templateUuid: templateId,
                            },
                            images: images?.map(image => image.originFileObj?.url),
                            logo: logo[0].originFileObj?.url,
                            placeUuid,
                            schedule: prepareSchedule(schedule),
                        },
                    },
                });
                navigate(`/subject`);
            } else {
                await updateSubject({
                    refetchQueries: [GET_SUBJECTS, GET_SUBJECTS_BY_ID],
                    variables: {
                        updateSubjectInput: {
                            ...values,
                            uuid: item?.uuid,
                            // content: {
                            //     tabs: prepareFieldsToSend(tabs),
                            //     templateUuid: templateId,
                            // },
                            images: images?.map(image => image.url),
                            logo: logo[0].url,
                            schedule,
                        },
                        placeUuid,
                    },
                });
                navigate(`..`);
            }
        },
        [createSubject, isCreate, item?.uuid, navigate, placeUuid, templateId, updateSubject],
    );

    return (
        <Form
            initialValues={initialValues}
            className="card flex flex-col gap-6 p-6"
            layout="vertical"
            onFinish={onFinish}
            // onValuesChange={(_, values) => console.log(values)}
        >
            <DefaultFields />
            {data?.template && <TemplateTabs data={data.template.tabs} />}

            <Item>
                <Button className="w-full" htmlType="submit" size="large" type="primary">
                    {isCreate ? 'Создать' : 'Сохранить изменения'}
                </Button>
            </Item>
        </Form>
    );
});

export default FormSubject;
