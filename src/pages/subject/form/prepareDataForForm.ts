import type {GetSubjectsByIdQuery} from '@/generated/graphql';
import {DAY_TYPES, SCHEDULE_DAYS} from '@/components/Schedule/types.ts';

export const prepareDataForForm = (subject: GetSubjectsByIdQuery['subject']) => {
    const {content, logoUrl, images} = subject;
    return {
        ...subject,
        tabs: content?.tabs ?? [],
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
