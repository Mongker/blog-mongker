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

const getQueryData = async (ref = 'news', setData = () => {}, dataQuery = []) => {
    let refDB = db.collection(ref);
    dataQuery.push(['status', true]);
    dataQuery.map((item) => {
        refDB = refDB.where(item[0], '==', item[1]);
    });
    refDB.orderBy('status', 'desc');
    await refDB.onSnapshot((querySnapshot) => {
        let object = {};
        if (querySnapshot.size) {
            // we have something
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                object[doc.id] = doc.data();
            });
        } else {
            // it's empty
            message.loading('Loading..', 1);
        }
        setData(object);
    });
};
export default getQueryData;
