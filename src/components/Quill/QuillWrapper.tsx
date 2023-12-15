/**
 * Created by MIRZOEV A. on 15.08.2023
 */

import type {Sources} from 'quill';
import type {UnprivilegedEditor} from 'react-quill';

import {memo} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface QuillWrapperProps {
    onChange: (value: string, delta: unknown, source: Sources, editor: UnprivilegedEditor) => void;
}

const modules = {
    toolbar: [
        [{align: 'right'}],
        [{header: [1, 2, false]}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{list: 'ordered'}, {list: 'bullet'}],
        ['link', 'image'],
    ],
};

// const formats = ['header', 'bold', 'italic', 'underline', 'strike', 'blockquote', 'list', 'bullet', 'link', 'image'];

const QuillWrapper = memo<QuillWrapperProps>(({onChange}) => {
    return <ReactQuill className="h-80" modules={modules} onChange={onChange} theme="snow" />;
});

export default QuillWrapper;
