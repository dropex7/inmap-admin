import {FIELD_TYPES} from './template/fields/types';

type FormFields = Record<string, any>;

export const prepareFieldsToSend = (tabs: FormFields) =>
    tabs.map(({templateTabUuid, fields}: any) => ({
        templateTabUuid,
        fields: fields.map(({type, data}: any) => {
            if (type === FIELD_TYPES.menu) {
                const imagesUrls = data?.imagesUrls?.fileList
                    ? data?.imagesUrls?.fileList.map(({originFileObj}: {originFileObj: any}) => originFileObj.url)
                    : data?.imagesUrls.map((image: any) => (image?.url ? image.url : image.originFileObj.url));

                return {data: {...data, imagesUrls}, type};
            }

            return {data, type};
        }),
    }));