import type {ThemeConfig} from 'antd';
import {theme} from 'antd';

export const customTheme: ThemeConfig = {
    token: {
        colorPrimary: '#a5e81f',
        colorInfo: '#a5e81f',
        colorWarning: '#3b86df',
        colorError: '#da377c',
        fontSize: 14,
        wireframe: false,
        colorPrimaryBgHover: '#272a30',
        colorPrimaryBorder: '#272a30',
        colorPrimaryBorderHover: '#272a30',
        colorPrimaryHover: '#a5e81f',
        colorSuccessBg: '#a5e81f33',
        colorSuccess: '#a5e81f',
        colorWarningBg: '#3b86df33',
        colorWarningBorder: '#3b86df',
        colorSuccessBorder: '#a5e81f',
        colorErrorBg: '#da377c33',
        colorErrorBorder: '#da377c',
        colorPrimaryBg: '#272a3080',
    },
    algorithm: theme.darkAlgorithm,
};
