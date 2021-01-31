/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 31/01/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { Button, Col, message } from 'antd';
import { auth, db } from '../../../config/firebase';
// import PropTypes from 'prop-types';

import TinyMceEditor from '../../../components/example/Tinymce/TinyMceEditor';
import generateUUID from '../../../util/generateUUID';

// tham khảo tại tài liệu: https://saveyourtime.medium.com/firebase-cloud-firestore-add-set-update-delete-get-data-6da566513b1b

function Note() {
    const [text, setText] = React.useState('');
    const [data, setData] = React.useState({});
    const addData = (text) => {
        const id = generateUUID();
        const data = {
            title: 'Le van mong',
            uid: id,
            note: text,
        };
        return db
            .collection('notes')
            .doc(id)
            .set(data)
            .then(() => {
                console.log('Success');
                message.success('Thêm thành công');
            })
            .catch((error) => {
                console.log(error);
                message.warning(`Thất bại ${error}`);
            });
    };
    const onDelete = () => {
        const index = Math.floor(Math.random() * Object.keys(data).length);
        const removeId = Object.keys(data)[index];
        db.collection('notes')
            .doc(removeId)
            .delete()
            .then(function () {
                console.log('Document successfully deleted!');
            })
            .catch(function (error) {
                console.error('Error removing document: ', error);
            });
    };
    const onSave = () => {
        addData(text);
        setText('');
    };

    const getNotes = async () =>
        await db.collection('notes').onSnapshot((querySnapshot) => {
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
    React.useEffect(() => {
        getNotes();
        return () => {
            getNotes();
        };
    }, []);

    return (
        <div>
            {Object.values(data).length > 0 && Object.values(data).map((item) => <div style={{ display: 'block', borderStyle: 'outset', borderRadius: '10%' }} dangerouslySetInnerHTML={{ __html: item.note }} />)}
            <TinyMceEditor onSave={setText} heightApp={300} />
            <Button onClick={onSave} type={'primary'}>
                Save
            </Button>
            <Button type={'dashed'} onClick={onDelete}>
                Xóa ngẫu nhiên
            </Button>
        </div>
    );
}

Note.propTypes = {};

Note.defaultProps = {};

export default Note;
