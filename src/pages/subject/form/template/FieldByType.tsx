/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import {memo} from 'react';

import {FIELD_TYPES} from './fields/types';
import Contact from '@/pages/subject/form/template/fields/Contact.tsx';
import MenuField from '@/pages/subject/form/template/fields/MenuField.tsx';

interface FieldByTypeProps {
    fieldType: string;
    fieldIndex: number;
    tabIndex: number;
}

const FieldByType = memo<FieldByTypeProps>(({fieldType, fieldIndex, tabIndex}) => {
    switch (fieldType) {
        case FIELD_TYPES.contacts:
            return <Contact />;
        case FIELD_TYPES.menu:
            return <MenuField tabIndex={tabIndex} fieldIndex={fieldIndex} />;
        default:
            return null;
    }
});

export default FieldByType;
