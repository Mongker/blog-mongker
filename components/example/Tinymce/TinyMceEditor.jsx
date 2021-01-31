/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 12/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
import PropTypes from 'prop-types';
// Thao khảo upload file tại đây: https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
function TinyMceEditor({ onSave, heightApp, widthApp }) {
    const [text, setText] = React.useState('');
    const [Img, setImg] = React.useState([]);
    const onChange = (e) => {
        console.log(e.target.getContent());
        setText(e.target.getContent());
    };
    const [windowSize, setWindowSize] = React.useState({
        heightApp: null,
        widthApp: null,
    });

    React.useEffect(() => {
        setWindowSize({
            heightApp: window.innerHeight,
            widthApp: window.innerWidth,
        });
    }, []);
    React.useEffect(() => {
        onSave(text);
    }, [text]);
    console.log('Img', Img);
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Editor
                apiKey='4k95hdk87th2mmwysccl9lvu2ap1ehtwjn1hd7qnkk4d6ziv'
                initialValue={text}
                init={{
                    height: heightApp || windowSize.heightApp,
                    menubar: true,
                    plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'],
                    toolbar: 'undo redo | formatselect | bold italic backcolor | link image |\
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help',
                    image_title: true,
                    automatic_uploads: true,
                    file_picker_types: 'image',
                    file_picker_callback: function (cb, value, meta) {
                        const input = document.createElement('input');
                        input.setAttribute('type', 'file');
                        input.setAttribute('accept', 'image/*');

                        /*
                      Note: In modern browsers input[type="file"] is functional without
                      even adding it to the DOM, but that might not be the case in some older
                      or quirky browsers like IE, so you might want to add it to the DOM
                      just in case, and visually hide it. And do not forget do remove it
                      once you do not need it anymore.
                    */
                        input.onchange = function () {
                            const file = this.files[0];

                            const reader = new FileReader();
                            reader.onload = function () {
                                /*
                          Note: Now we need to register the blob in TinyMCEs image blob
                          registry. In the next release this part hopefully won't be
                          necessary, as we are looking to handle it internally.
                        */
                                const id = 'blobid' + new Date().getTime();
                                const blobCache = tinymce.activeEditor.editorUpload.blobCache;
                                const base64 = reader.result.split(',')[1];
                                Img.push(base64);
                                setImg(Img);
                                const blobInfo = blobCache.create(id, file, base64);
                                blobCache.add(blobInfo);
                                console.log('blobInfo.blobUri(): ', blobInfo.blobUri());
                                /* call the callback and populate the Title field with the file name */
                                // cb(blobInfo.blobUri(), { title: file.name });
                                cb(blobInfo.blobUri(), { title: file.name });
                                console.log('file ', file);
                            };
                            reader.readAsDataURL(file);
                        };
                        input.click();
                    },
                }}
                onChange={onChange}
            />
            {/* <div dangerouslySetInnerHTML={{ __html: text }} />*/}
        </div>
    );
}

TinyMceEditor.propTypes = {
    onSave: PropTypes.func,
};

TinyMceEditor.defaultProps = {
    onSave: () => {},
};

export default TinyMceEditor;
