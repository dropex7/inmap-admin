/**
 * Created by MIRZOEV A. on 25.11.2023
 */

import type {Color} from 'antd/es/color-picker';

import {useMutation, useQuery} from '@apollo/client';
import {Form} from 'antd';
import {memo, useCallback, useMemo, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import type {SCHEDULE_DAYS} from '@/components/Schedule/types';
import type {Query} from '@/generated/graphql';

import {CREATE_SUBJECT, UPDATE_SUBJECT} from '@/operations/subject/mutation';
import {GET_SUBJECTS_BY_ID, SUBJECTS_OF_PLACE} from '@/operations/subject/query';
import {prepareSchedule} from '@/utils/utils';
import {prepareFieldsToSend} from './helper';
import type {ScheduleFormInterval} from '@/components/Schedule/types';
import type {GetSubjectsByIdQuery} from '@/generated/graphql';
import {defaultScheduleValues, prepareDataForForm} from './prepareDataForForm';
import type {ImageType} from '@/components/ImageLoader/ImageLoaderField.tsx';
import {GET_TEMPLATE_BY_ID} from '@/operations/template/query.ts';
import TabsMenu from '@/pages/Subject/form/tabs/TabsMenu.tsx';
import {FORM_MENU_BASE_ITEM_KEYS} from '@/pages/Subject/form/tabs/helper.ts';
import TabView from '@/pages/Subject/form/tabs/TabView.tsx';
import {useGetPlaceUuid} from '@/hooks/useGetPlaceUuid.ts';

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

export type TemplateById = {template: Query['template']};

const baseInitialValues = {schedule: defaultScheduleValues()};

const FormSubject = memo<FormProps>(({item}) => {
    const {templateId} = useParams();
    const [selectedTab, setSelectedTab] = useState<string>(FORM_MENU_BASE_ITEM_KEYS.MAIN);
    const navigate = useNavigate();
    const placeUuid = useGetPlaceUuid();
    const isCreate = !item?.uuid;

    const {data} = useQuery<TemplateById>(GET_TEMPLATE_BY_ID, {
        variables: {uuid: isCreate ? templateId! : item?.content?.templateUuid},
        skip: isCreate ? false : !item?.content?.templateUuid,
    });

    const [createSubject] = useMutation<SubjectFormValues>(CREATE_SUBJECT);
    const [updateSubject] = useMutation<SubjectFormValues>(UPDATE_SUBJECT);

    const extraFields = useMemo(
        () =>
            data?.template.tabs.map(({name, uuid}) => ({
                label: name,
                key: uuid,
            })),
        [data],
    );

    const initialValues = useMemo(() => (isCreate ? baseInitialValues : prepareDataForForm(item)), [isCreate, item]);

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
                    refetchQueries: [SUBJECTS_OF_PLACE, 'GetSubjectsOfPlace'],
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
                    refetchQueries: [SUBJECTS_OF_PLACE, GET_SUBJECTS_BY_ID],
                    variables: {
                        updateSubjectInput: {
                            ...values,
                            uuid: item?.uuid,
                            // TODO Добавить обработку табов
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
            labelCol={{span: 6}}
            wrapperCol={{span: 24}}
            name="subjectForm"
            className="flex h-full"
            initialValues={initialValues}
            onFinish={onFinish}
        >
            <TabsMenu selectedTab={selectedTab} setSelectedTab={setSelectedTab} extraFields={extraFields} />

            <TabView selectedTab={selectedTab} tabs={data?.template.tabs ?? []} />
        </Form>
    );
});

export default FormSubject;
