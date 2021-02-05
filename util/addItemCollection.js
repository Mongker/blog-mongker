/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 06/02/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
import { db } from '../config/firebase';
import { message } from 'antd';
async function addItemCollection (collection, idDocument, data, callSuccess = () => {}, callError = () => {}) {
    return await db
        .collection(collection)
        .doc(idDocument)
        .set(data)
        .then(() => {
            console.log('Success');
            message.success('Thêm thành công');
            callSuccess();
        })
        .catch((error) => {
            console.log(error);
            message.warning(`Thất bại ${error}`);
            callError();
        });
}

export default addItemCollection;
