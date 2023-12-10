import type {ConfigProviderProps} from 'antd/es/config-provider';

export const validateMessagesWithLabels: Required<ConfigProviderProps>['form']['validateMessages'] = {
    required: 'Поле обязательное',

    string: {
        len: 'Поле "${label}" должно состоять из ${len} символов',
        max: 'Поле "${label}" должно состоять из максимум ${max} символов',
        min: 'Поле "${label}" должно состоять из минимум ${min} символов',
    },
};
