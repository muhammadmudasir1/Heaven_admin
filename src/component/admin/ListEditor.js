import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const ListEditor = ({text,setText}) => {


    const modules = {
        toolbar: [
            [{ 'list': 'bullet' }],
        ],
    };


    return (
        <ReactQuill
            className='h-full'
            theme="snow"
            modules={modules}
            placeholder="Start typing your list here..."
            onChange={setText}
            value={text}
        />
    )
}

export default ListEditor