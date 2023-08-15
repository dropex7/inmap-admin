/**
 * Created by MIRZOEV A. on 15.08.2023
 */

import { memo } from "react";
import ReactQuill, { UnprivilegedEditor } from "react-quill";
import { Sources } from "quill";

interface QuillWrapperProps {
  value: any;
  onChange: (
    value: string,
    delta: unknown,
    source: Sources,
    editor: UnprivilegedEditor
  ) => void;
}

const modules = {
  toolbar: [
    [{ align: "right" }],
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image"],
  ],
};

const formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
];

const QuillWrapper = memo<QuillWrapperProps>(({ value, onChange }) => {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={onChange}
      modules={modules}
    />
  );
});

export default QuillWrapper;
