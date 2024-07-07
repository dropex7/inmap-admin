/**
 * Created by MIRZOEV A. on 07.02.2024
 */

import {memo} from 'react';
import type {MenuProps} from 'antd';
import {Tabs} from 'antd';
import {FORM_MENU_BASE_ITEM_KEYS} from '@/pages/subject/form/tabs/helper.ts';
import TabView from '@/pages/subject/form/tabs/TabView.tsx';
import type {TemplateById} from '@/pages/subject/form/FormSubject.tsx';

interface TabsMenuProps {
    data?: TemplateById;
    extraFields?: MenuProps['items'];
}

const items: MenuProps['items'] = [
    {
        label: 'Основная информация',
        key: FORM_MENU_BASE_ITEM_KEYS.MAIN,
    },
    {
        label: 'Фотографии',
        key: FORM_MENU_BASE_ITEM_KEYS.PHOTOS,
    },
];

const TabsMenu = memo<TabsMenuProps>(({data, extraFields = []}) => {
    return (
        <Tabs
            tabPosition="left"
            className="w-full pt-3"
            items={[...items, ...extraFields].map(({label, key}: any) => {
                return {
                    label,
                    key,
                    forceRender: true,
                    children: <TabView key={key} tabKey={key} tabs={data?.template.tabs ?? []} />,
                };
            })}
        />
    );
});

export default TabsMenu;
