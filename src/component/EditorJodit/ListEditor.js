import React, { useState, useRef, useMemo, useEffect,useCallback } from 'react';
import JoditEditor from 'jodit-react';
import { useAuth } from '../../context/AuthContext';

const ListEditor = ({ text,setText }) => {
	const editor = useRef(null);
	const [content, setContent] = useState('');
    const { auth, setAuth } = useAuth()

    useEffect(()=>{
        console.log(text)
    },[text])

    const handleChange = useCallback(newTextAreaValue => {
		console.log('handleWYSIWYGChange', newTextAreaValue);

		setText(newTextAreaValue);
		// setInputValue(newTextAreaValue);

		return setText(() => newTextAreaValue);
	}, []);

    // const headers= {
    //     Authorization: `Bearer ${auth.accessToken}`,
    //     maxBodyLength: 2000000,
    //     maxContentLength: 2000000,
    // }
    
	const config = {
        // toolbarAdaptive: false,
        // uploader: {
        //     insertImageAsBase64URI: true, // You can choose to insert the image as Base64 URI
        //     url: '/api/uploadImage', // URL to your image upload endpoint
        //     format: 'json', // Format of response from the server
        //     method: 'POST', // HTTP method for the upload request
        //     withCredentials: false, // Whether to include credentials with the request
        //     headers: {headers}, // Any additional headers you want to include
        //     isSuccess: (response) => response && response.status === 200, // Custom success check function
        //     process: (response) => {
        //         console.log(response)
        //         // Custom response processing function
        //         return {
        //             files: [{
        //                 // Here you need to return the URL of the uploaded image
        //                 url: response.data.url
        //             }]
        //         };
        //     },
        //     defaultHandlerSuccess: true, // Whether Jodit should handle the success response
        //     defaultHandlerError: true, // Whether Jodit should handle the error response
        //     dropzone: '.jodit_wysiwyg', // Selector for the dropzone area
        //     timeout: 0, // Timeout for the upload request
        // },
        // Other Jodit configuration options...
        uploader: {
            url:"/api/uploadImage",
            insertImageAsBase64URI: true
          },
          disablePlugins: [
            "table",
            "video",
            "file",
            "symbols",
            "print",
            "copyformat",
            "ai-commands",
            "bold",
            "about",
            "indent",
            "redo-undo",
            "search",
            "font",
            // "ordered-list",
            "ai-assistant",
            "image",
            // "preview",
            "fullsize",
            "hr",
            "link",
            "line-height",
            "justify",
            "format-block",
            "class-span",
            "clean-html",
            "clipboard",
            "color",
            "spellcheck",
            'speech-recognize',
            // 'i18n'
            ],
            speech: false,
        toolbarAdaptive: false,
        // observer: {
        //     insertHandler: function (element) {
        //         // Check if the element is a paragraph
        //         console.log("insert")
        //         // if (element.nodeName.toLowerCase() === 'p') {
        //             // Add your custom CSS class to the paragraph element
        //             // element.classList.add('custom-paragraph-class');
        //         }
        //         // Add more checks and custom CSS class assignments as needed
        //     },
        //     // You can add more observer options as needed
        }
    
    try {
        return (
            
            <div className=' h-52 overflow-auto bg-red-500'>

                <JoditEditor
                className='bg-orange-400'
                    ref={editor}
                    value={text}
                    config={config}
                    tabIndex={1} 
                    onBlur={newContent => setText(newContent)} // preferred to use only this option to update the content for performance reasons

                />
            </div>
        );
        
    } catch (error) {
        console.log(error)
    }
};

export default ListEditor