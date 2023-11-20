/**
 * Created by MIRZOEV A. on 19.07.2023
 */

import React, { memo, ReactElement, useCallback, useState } from "react";
import { Button, Select } from "antd";
import { v4 } from "uuid";
import { EXTRA_FIELD_TYPES, extraFieldText } from "../types";
import ExpandableText from "./ExpandableText";
import PhoneNumbers from "./PhoneNumbers";

interface NewFieldFormProps {
  addNewField: (elementId: string, value: ReactElement) => void;
  removeNewField: (elementId: string) => void;
}

const NewFieldForm = memo<NewFieldFormProps>(
  ({ addNewField, removeNewField }) => {
    const [type, setType] = useState<EXTRA_FIELD_TYPES>(
      EXTRA_FIELD_TYPES.EXPANDABLE
    );

    const handleAddNewField = useCallback(() => {
      const elementId = v4();
      switch (type) {
        case EXTRA_FIELD_TYPES.EMAIL:
        case EXTRA_FIELD_TYPES.NOTICE:
        case EXTRA_FIELD_TYPES.PHONES:
          addNewField(
            elementId,
            <PhoneNumbers
              key={elementId}
              removeElement={() => removeNewField(elementId)}
            />
          );
          break;
        case EXTRA_FIELD_TYPES.SOCIAL:
        case EXTRA_FIELD_TYPES.WEBSITE:
        case EXTRA_FIELD_TYPES.EXPANDABLE:
          addNewField(
            elementId,
            <ExpandableText
              key={elementId}
              removeElement={() => removeNewField(elementId)}
            />
          );
          break;
      }
    }, [removeNewField, type]);

    const handleChangeType = useCallback((value: EXTRA_FIELD_TYPES) => {
      setType(value);
    }, []);

    return (
      <div className="flex items-center gap-3">
        <Select
          className="w-80"
          value={type}
          options={Object.entries(extraFieldText).map((value) => ({
            label: value[1],
            value: value[0],
          }))}
          onChange={handleChangeType}
        />
        <Button type="primary" onClick={handleAddNewField}>
          Добавить дополнительное поле
        </Button>
      </div>
    );
  }
);

export default NewFieldForm;
