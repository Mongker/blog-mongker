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

/**
 * @description: Dùng để get danh sách bài viết theo thời gian thực với firbase
 * @author: MongLV
 * @param: setData
 * @returns null
 */
const getNews = async (setData = () => {}) =>
    await db.collection('news').onSnapshot((querySnapshot) => {
        let object = {};
        if (querySnapshot.size) {
            // we have something
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, ' => ', doc.data());
                object[doc.id] = doc.data();
            });
        } else {
            // it's empty
            message.warn('Loading');
        }
        setData(object);
    });
export default getNews;
