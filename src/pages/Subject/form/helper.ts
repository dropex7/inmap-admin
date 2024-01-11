import {FIELD_TYPES} from './template/fields/types';

type FormFields = Record<string, any>;

const getIndexWithoutZeros = (value: string) => {
    return value.slice(5, value.length);
};

export const prepareFieldsToSend = (tabs: FormFields) => {
    return Object.entries(tabs).map(([uuid, fields]) => {
        const resultFields = Object.keys(fields)
            .sort()
            .map(fieldKey => {
                const [, type] = fieldKey.split('&');
                if (type === FIELD_TYPES.images) {
                    const imagesUrls = fields[fieldKey]?.imagesUrls?.map(({url}: {url: string}) => url);
                    return {data: {...fields[fieldKey], imagesUrls}, type};
                }
                return {data: fields[fieldKey], type};
            });

        return {
            fields: resultFields,
            templateTabUuid: getIndexWithoutZeros(uuid),
        };
    });
};
