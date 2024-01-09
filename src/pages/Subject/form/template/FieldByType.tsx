/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import {memo} from 'react';

import EmailAddress from './fields/EmailAddress';
import ImagesField from './fields/ImagesField';
import PhonesField from './fields/PhonesField';
import SocialMediaField from './fields/SocialMediaField';
import TitleField from './fields/TitleField';
import Website from './fields/Website';
import {FIELD_TYPES} from './fields/types';

interface FieldByTypeProps {
    fieldType: string;
    fieldIndex: number;
    tabIndex: number;
}

const FieldByType = memo<FieldByTypeProps>(({fieldType, fieldIndex, tabIndex}) => {
    switch (fieldType) {
        case FIELD_TYPES.website_url:
            return <Website />;
        case FIELD_TYPES.email_address:
            return <EmailAddress />;
        case FIELD_TYPES.title:
            return <TitleField />;
        case FIELD_TYPES.social_media:
            return <SocialMediaField />;
        case FIELD_TYPES.images:
            return <ImagesField tabIndex={tabIndex} fieldIndex={fieldIndex} />;
        case FIELD_TYPES.phones:
            return <PhonesField />;
        default:
            return null;
    }
});

export default FieldByType;
