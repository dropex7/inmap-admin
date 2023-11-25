/**
 * Created by MIRZOEV A. on 22.11.2023
 */

import { memo, useMemo } from "react";
import FieldWrapper from "./fields/FieldWrapper";
import Website from "./fields/Website";
import TitleField from "./fields/TitleField";
import SocialMediaField from "./fields/SocialMediaField";
import ImagesField from "./fields/ImagesField";
import PhonesField from "./fields/PhonesField";
import DividerField from "./fields/DividerField";
import { FIELD_TYPES } from "./fields/types";
import EmailAddress from "./fields/EmailAddress";

interface FieldByTypeProps {
  field: string;
  name: string;
}

const FieldByType = memo<FieldByTypeProps>(({ field, name }) => {
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
      return <ImagesField fieldName={name} />;
    case FIELD_TYPES.phones:
      return (
        <FieldWrapper name={name}>
          <PhonesField />
        </FieldWrapper>
      );
    case FIELD_TYPES.top_block_divider:
      return <DividerField name={name} type={FIELD_TYPES.top_block_divider} />;
    case FIELD_TYPES.bottom_block_divider:
      return (
        <DividerField name={name} type={FIELD_TYPES.bottom_block_divider} />
      );
    case FIELD_TYPES.block_divider:
      return <DividerField name={name} type={FIELD_TYPES.block_divider} />;
    case FIELD_TYPES.empty_divider:
      return <DividerField name={name} type={FIELD_TYPES.empty_divider} />;
    default:
      return <>{name}</>;
  }
});

export default FieldByType;
