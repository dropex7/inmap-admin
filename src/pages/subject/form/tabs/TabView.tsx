/**
 * Created by MIRZOEV A. on 07.02.2024
 */

import {memo, useMemo} from 'react';
import MainTab from '@/pages/subject/form/tabs/MainTab.tsx';
import {FORM_MENU_BASE_ITEM_KEYS} from '@/pages/subject/form/tabs/helper.ts';
import TemplateFields from '@/pages/subject/form/template/TemplateFields.tsx';
import type {LocalizedTemplateTabModel} from '@/generated/graphql.ts';
import PhotosTab from '@/pages/subject/form/tabs/PhotosTab.tsx';
import ExtraTabWrapper from '@/pages/subject/form/tabs/ExtraTabWrapper.tsx';

interface TabViewProps {
    selectedTab: string;
    tabs: Array<LocalizedTemplateTabModel>;
}

const baseViews = {
    [FORM_MENU_BASE_ITEM_KEYS.MAIN]: <MainTab />,
    [FORM_MENU_BASE_ITEM_KEYS.PHOTOS]: <PhotosTab />,
};

const generateTabViews = (tabs: Array<LocalizedTemplateTabModel>) => {
    const views: Record<string, any> = {};

    tabs.forEach(({uuid, name, fields}, index) => {
        views[uuid] = (
            <ExtraTabWrapper title={name} key={uuid}>
                <TemplateFields templateTabUuid={uuid} fields={fields} name={name} tabIndex={index} />
            </ExtraTabWrapper>
        );
    });

    return views;
};

const TabView = memo<TabViewProps>(({selectedTab, tabs}) => {
    const allViews = useMemo<Record<string, any>>(() => ({...baseViews, ...generateTabViews(tabs)}), [tabs]);

    return <div className="w-full">{allViews[selectedTab]}</div>;
});

export default TabView;
