/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 31/01/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { Button, Input, message } from 'antd';
import { auth, db } from '../../../config/firebase';
function SignIn() {
    const [data, setData] = React.useState({
        email: '',
        password: '',
        name: '',
        uid: '',
    });

    const getName = (uid) => {
        db.collection('users')
            .where('uid', '==', uid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, ' => ', doc.data());
                    const _data = doc.data();
                    message.success('Chào: ', _data.name);
                    setData({ ..._data });
                });
            })
            .catch((error) => {
                console.log(error);
                message.warning('Thất bại');
            });
    };
    const SignIn = ({ email, password }) => {
        return auth
            .signInWithEmailAndPassword(email, password)
            .then((response) => {
                message.success('Thành công', response);
                debugger; // MongLV
                console.log('refreshToken', response.user.refreshToken);
                return getName(response.user.uid);
            })
            .catch((error) => {
                message.warning('Thất bại');
                return { error };
            });
    };
    const onSubmit = () => {
        return SignIn(data).then((user) => {
            console.log(user);
        });
    };
    React.useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                let uid = user.uid;
                console.log('uid', uid);
                setData({ uid: uid, ...data });
                // ...
            } else {
                // User is signed out
                // ...
            }
        });
    }, []);
    const styleItem = { width: 200, marginBottom: 5 };
    console.log('data:', data);
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ textAlign: 'center', color: 'red', fontSize: 24, ...styleItem }}>SignIn</div>
            <Input placeholder={'email'} onChange={(e) => setData({ ...data, email: e.target.value })} style={styleItem} />
            <Input placeholder={'password'} onChange={(e) => setData({ ...data, password: e.target.value })} style={styleItem} />
            <Button onClick={onSubmit}>Ok</Button>
            <h>{data.name && data.name}</h>
        </div>
    );
}

export default SignIn;
