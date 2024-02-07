/**
 * Created by MIRZOEV A. on 07.02.2024
 */

import {memo} from 'react';
import type {MenuProps} from 'antd';
import {Menu} from 'antd';
import {FileImageOutlined, ShopOutlined} from '@ant-design/icons';
import {FORM_MENU_BASE_ITEM_KEYS} from '@/pages/Subject/form/tabs/helper.ts';

interface TabsMenuProps {
    selectedTab: string;
    setSelectedTab: (value: string) => void;
    extraFields?: MenuProps['items'];
}

const items: MenuProps['items'] = [
    {
        label: 'Основная информация',
        key: FORM_MENU_BASE_ITEM_KEYS.MAIN,
        icon: <ShopOutlined />,
    },
    {
        label: 'Фотографии',
        key: FORM_MENU_BASE_ITEM_KEYS.PHOTOS,
        icon: <FileImageOutlined />,
    },
];

const TabsMenu = memo<TabsMenuProps>(({selectedTab, setSelectedTab, extraFields = []}) => {
    const onClick: MenuProps['onClick'] = e => {
        setSelectedTab(e.key);
    };

    return (
        <Menu
            className="w-72 p-1"
            onClick={onClick}
            selectedKeys={[selectedTab]}
            mode="vertical"
            items={[...items, ...extraFields]}
        />
    );
});

export default TabsMenu;
