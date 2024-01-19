import React from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import ImageResize from 'quill-image-resize-module-react';

Quill.register('modules/imageResize', ImageResize);

const AddReview = () => {
    const [review, setReview] = useState('')
    const modules = {
        toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ 'header': [1, 2, 3, 4, 5, 6, false] }], 
            ['size'],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            [{ 'color': [] }, { 'background': [] }],
            [{'font': []}],
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
        <div className=' w-full h-screen p-4'>
            <div>
                <h2 className='text-2xl font-bold'>Add Review</h2>
            </div>
            <div className='mt-5 h-80'>
                <ReactQuill
                    className='h-full'
                    modules={modules}
                    theme="snow"
                    value={review}
                    formats={[
                        'header', 'font', 'size',
                        'bold', 'italic', 'underline', 'strike',
                        'list', 'bullet', 'indent',
                        'link', 'image',
                        'color', 'background',
                        'font', 'align',
                        'blockquote', 'code-block',
                    ]}
                    onChange={setReview} />
            </div>
                {review}

        </div>

    )
}

export default AddReview