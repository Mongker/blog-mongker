/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 03/02/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
import generateUUID from './generateUUID';
import { firebase, storage } from '../config/firebase';

function uploadFirebase(file, type, callback) {
    const nameId = generateUUID();
    try {
        let metadata = {
            contentType: file.type,
        };
        // const uploadTask = type ? storage.ref().child(`images/${nameId}.jpg`).putString(file, 'data_url') :  storage.ref().child(`images/${file.name}`).put(file, metadata);
        const uploadTask = storage.ref().child(`images/${nameId}-${file.name}`).put(file.originFileObj, metadata);
        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case firebase.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Upload is paused');
                        break;
                    case firebase.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            },
            (error) => {
                // Handle unsuccessful uploads
            },
            () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                uploadTask.snapshot.ref.getDownloadURL().then((_downloadURL) => {
                    callback(_downloadURL)
                    return _downloadURL;
                });
            })
    } catch (e) {
        console.log('e', e);
    }
}
export default uploadFirebase;
