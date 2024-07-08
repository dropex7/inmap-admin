import type {GetSubjectsByIdQuery, TemplatedContentTabLocalizedModel} from '@/generated/graphql';
import {DAY_TYPES, SCHEDULE_DAYS} from '@/components/Schedule/types.ts';
import {FIELD_TYPES} from '@/pages/subject/form/template/fields/types.ts';

function prepareTabs(tabs?: Array<TemplatedContentTabLocalizedModel>) {
    if (tabs) {
        return tabs.map(({fields, __typename: _, ...rest}) => ({
            ...rest,
            fields: fields.map(({data, type}) => {
                if (type === FIELD_TYPES.menu) {
                    const newData = {
                        ...data,
                        imagesUrls: data.imagesUrls.map((imageUrl: string, index: number) =>
                            createFileFromUrl(imageUrl, index),
                        ),
                    };

                    return {type, data: newData};
                }

                return {type, data};
            }),
        }));
    }
    return [];
}

export const prepareDataForForm = (subject: GetSubjectsByIdQuery['subject']) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {content, logoUrl, images, recs, __typename, ...rest} = subject;
    return {
        ...rest,
        recs: recs?.map(({uuid}) => uuid),
        tabs: prepareTabs(content?.tabs),
        logo: [createFileFromUrl(logoUrl, 0)],
        images: images.map((imageUrl, index) => createFileFromUrl(imageUrl, index)),
    };
};

export function createFileFromUrl(url: string, index: number) {
    return {
        uid: Symbol(url),
        name: index + 1,
        originFileObj: {
            url,
        },
        url,
    };
}

export const defaultScheduleValues = () => {
    const defaultSchedule: Record<string, any> = {};

    Object.values(SCHEDULE_DAYS).forEach(day => {
        defaultSchedule[day] = {
            type: DAY_TYPES.OFF,
        };
    });

    return defaultSchedule;
};
