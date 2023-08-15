/**
 * Created by MIRZOEV A. on 15.08.2023
 */
import QuillWrapper from "../../components/QuillWrapper";
import { useCallback, useState } from "react";
import { UnprivilegedEditor } from "react-quill";
import { Sources } from "quill";

export function Component() {
  const [value, setValue] = useState<Record<string, any>>();

  const onChange = useCallback(
    (
      value: string,
      delta: unknown,
      source: Sources,
      editor: UnprivilegedEditor
    ) => {
      setValue(editor.getContents());
    },
    [setValue]
  );

  return <QuillWrapper value={value} onChange={onChange} />;
}
