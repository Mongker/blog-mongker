/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 13/02/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import { db } from '../config/firebase';
import { message } from 'antd';
async function updateItemCollection(collection, idDocument, data, callSuccess = () => {}, callError = () => {}) {
    return await db
        .collection(collection)
        .doc(idDocument)
        .update(data)
        .then(() => {
            console.log('Success');
            message.success('Đã cập nhật');
            callSuccess();
        })
        .catch((error) => {
            console.log(error);
            message.warning(`Thất bại ${error}`);
            callError();
        });
}

export default updateItemCollection;
