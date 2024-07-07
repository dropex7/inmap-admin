import type {GetPlaceRecommendationsQuery} from '@/generated/graphql.ts';

export enum FORM_MENU_BASE_ITEM_KEYS {
    MAIN = 'MAIN',
    PHOTOS = 'PHOTOS',
}

type TreeElement = {
    value: string;
    title: string;
    children?: Array<TreeElement> | null;
};

export function createTreeData(data: GetPlaceRecommendationsQuery['placeRecommendations']): Array<TreeElement> {
    const parents = data.filter(rec => rec.parent === null);
    const children = data.filter(rec => rec.parent !== null);
    const result: Array<TreeElement> = [];

    parents.forEach(({uuid, title}) => {
        const findChildren = children.filter(({parent}) => parent!.uuid === uuid);
        const childrenElements = findChildren.map(({uuid, title}) => ({value: uuid, title}));

        result.push({
            value: uuid,
            title,
            children: childrenElements,
        });
    });

    return result;
}
