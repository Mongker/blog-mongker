/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 31/01/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Upload, message, Button } from 'antd';

import uploadFirebase from '../../../util/uploadFirebase';
function file() {
    const [viewURL, setViewURL] = React.useState('');
    const apiUpload = {
        name: 'file',
        action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        headers: {
            authorization: 'authorization-text',
        },
        async onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
                const a = await uploadFirebase(info.fileList[0], null, setViewURL)
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    return (
        <div>
            <Upload {...apiUpload}>
                <Button type={'primary'}> Tải lên</Button>
            </Upload>
        </div>
    );
}

file.propTypes = {};

file.defaultProps = {}

export default file;
