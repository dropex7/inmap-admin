import type {GetSubjectsByIdQuery} from '@/generated/graphql';

export const prepareDataForForm = (subject: GetSubjectsByIdQuery['subject']) => {
    const {content, logoUrl, images} = subject;
    return {
        ...subject,
        tabs: content?.tabs ?? [],
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
