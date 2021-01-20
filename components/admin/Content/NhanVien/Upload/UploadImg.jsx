/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 19/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import 'antd/dist/antd.css';
import { Upload, Image } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { URL_API } from 'redux/api/config';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

function UploadImg({setListImg, listImg, fileList = [], setFileList}) {
    const [previewVisible, setPreviewVisible] = React.useState(false);
    const [previewImage, setPreviewImage] = React.useState('');
    const [previewTitle, setPreviewTitle] = React.useState('');
    const showModalImage = () => setPreviewVisible(!previewVisible);
    const handlePreview = async (file) => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        showModalImage();
        setPreviewImage(file.url || file.preview);
        setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1));
    };
    const handleChange = async ({fileList}) => {
        let arrayImg = [];
        if (fileList.length > 0) {
            fileList.map((item) => {
                item.response && arrayImg.push(`${item.response.fileNameInServer}`);
                item.url && arrayImg.push(`${item.url.slice(31)}`);
            });
        }
        setListImg(arrayImg);
        setFileList(fileList);
    };

    return(
        <React.Fragment>
            <Upload
                action={`${URL_API.local}file/upload`}
                listType={'picture-card'}
                onPreview={handlePreview}
                fileList={fileList}
                onChange={handleChange}
            >
                {listImg && listImg.length >= 1 ? null : (
                    <div>
                        <PlusOutlined/>
                        <div style={{marginTop: 8}}>Upload</div>
                    </div>
                )}
            </Upload>
            <Image
                width={200}
                preview={{
                    visible: previewVisible,
                    onVisibleChange: showModalImage
                }}
                src={previewImage}
                style={{position: 'absolute', top: '-10000px'}}
            />
        </React.Fragment>
    );
}

UploadImg.propTypes = {};

UploadImg.defaultProps = {};

export default UploadImg;
