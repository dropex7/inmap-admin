import type {GetSubjectsByIdQuery, TemplatedContentLocalizedModel} from '../../../generated/graphql';
import {createIndexWithZeros} from './helper';

export const prepareDataForForm = (subject: GetSubjectsByIdQuery['subject']) => {
    const {content, logoUrl, images} = subject;
    console.log(createTabsForForm(content?.tabs ?? []));
    return {
        ...subject,
        // ...createTabsForForm(content?.tabs ?? []),
        tabs: [],
        logo: [createFileFromUrl(logoUrl, 0)],
        images: images.map((imageUrl, index) => createFileFromUrl(imageUrl, index)),
    };
};

function createFileFromUrl(url: string, index: number) {
    return {
        uid: Symbol(url),
        name: index + 1,
        url,
    };
}

function createTabsForForm(tabs: TemplatedContentLocalizedModel['tabs']) {
    const resTabs: Record<string, any> = {};

    tabs.forEach(({templateTabUuid, fields}, tabIndex) => {
        const tabName = `${createIndexWithZeros(tabIndex)}&${templateTabUuid}`;
        const tabFields: Record<string, any> = {};

        fields.forEach(({type, data}, fieldIndex) => {
            const fieldName = `${createIndexWithZeros(fieldIndex)}&${type}`;
            tabFields[fieldName] = data;
        });

        resTabs[tabName] = tabFields;
    });

    return {
        tabs: resTabs,
    };
}
