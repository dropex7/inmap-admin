/**
 * Created by MIRZOEV A. on 30.08.2023
 */

import { memo, useCallback, useState } from "react";
import { Form } from "antd";
import QuillWrapper from "../../components/QuillWrapper";
import { Sources } from "quill";
import { UnprivilegedEditor } from "react-quill";

interface PromoDescriptionProps {}

const { Item, useFormInstance } = Form;

const PromoDescription = memo<PromoDescriptionProps>(({}) => {
  const [value, setValue] = useState<Record<string, any>>();
  const form = useFormInstance();
  const onChange = useCallback(
    (
      value: string,
      delta: unknown,
      source: Sources,
      editor: UnprivilegedEditor
    ) => {
      form.setFieldValue("description", editor.getContents());
    },
    [setValue]
  );

  return (
    <Item name="description">
      <QuillWrapper onChange={onChange} />
    </Item>
  );
});

export default PromoDescription;
