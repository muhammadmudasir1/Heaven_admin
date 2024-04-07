import React, { useEffect } from 'react'
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageResize from 'quill-image-resize-module-react';
Quill.register('modules/imageResize', ImageResize);


const TextEditor = ({text,setText}) => {

    const handleChange=(content, delta, source, editor)=>{
        setText(content)
    }
    // console.log(text)
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
            ['size'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            [{ 'color': [] }, { 'background': [] }],
            [{ 'font': [] }],
            [{ 'align': [] }],
            ['blockquote', 'code-block'],
            ['clean'],
            ['image-resize'],
            ['undo', 'redo'],
        ],
        imageResize: {
            parchment: Quill.import('parchment'),
            modules: ['Resize', 'DisplaySize', 'Toolbar']
        }
    };

    return (
        <ReactQuill
            className='h-full'
            modules={modules}
            theme="snow"
            value={text}
            formats={[
                'header', 'font', 'size',
                'bold', 'italic', 'underline', 'strike',
                'list', 'bullet', 'indent',
                'link', 'image',
                'color', 'background',
                'font', 'align',
                'blockquote', 'code-block',
            ]}
            onChange={handleChange} />
    )
}

export default TextEditor