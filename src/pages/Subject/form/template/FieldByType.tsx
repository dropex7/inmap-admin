/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import {memo} from 'react';

import DividerField from './fields/DividerField';
import EmailAddress from './fields/EmailAddress';
import FieldWrapper from './fields/FieldWrapper';
import ImagesField from './fields/ImagesField';
import PhonesField from './fields/PhonesField';
import SocialMediaField from './fields/SocialMediaField';
import TitleField from './fields/TitleField';
import Website from './fields/Website';
import {FIELD_TYPES} from './fields/types';

interface FieldByTypeProps {
    field: string;
    name: string;
    tabUuid: string;
}

const FieldByType = memo<FieldByTypeProps>(({field, name, tabUuid}) => {
    switch (field) {
        case FIELD_TYPES.website_url:
            return (
                <FieldWrapper name={name}>
                    <Website />
                </FieldWrapper>
            );
        case FIELD_TYPES.email_address:
            return (
                <FieldWrapper name={name}>
                    <EmailAddress />
                </FieldWrapper>
            );
        case FIELD_TYPES.title:
            return (
                <FieldWrapper name={name}>
                    <TitleField />
                </FieldWrapper>
            );
        case FIELD_TYPES.social_media:
            return (
                <FieldWrapper name={name}>
                    <SocialMediaField />
                </FieldWrapper>
            );
        case FIELD_TYPES.images:
            return (
                <FieldWrapper name={name}>
                    <ImagesField fieldName={name} tabUuid={tabUuid} />
                </FieldWrapper>
            );
        case FIELD_TYPES.phones:
            return (
                <FieldWrapper name={name}>
                    <PhonesField />
                </FieldWrapper>
            );
        case FIELD_TYPES.top_block_divider:
            return <DividerField name={name} type={FIELD_TYPES.top_block_divider} />;
        case FIELD_TYPES.bottom_block_divider:
            return <DividerField name={name} type={FIELD_TYPES.bottom_block_divider} />;
        case FIELD_TYPES.block_divider:
            return <DividerField name={name} type={FIELD_TYPES.block_divider} />;
        case FIELD_TYPES.empty_divider:
            return <DividerField name={name} type={FIELD_TYPES.empty_divider} />;
        default:
            return <>{name}</>;
    }
});

export default FieldByType;
