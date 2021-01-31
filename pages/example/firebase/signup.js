/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 28/01/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { Button, Input, message } from 'antd';
import { auth, db } from '../../../config/firebase';
function SignUp() {
    const [data, setData] = React.useState({
        name: '',
        email: '',
        password: '',
    });

    // Cách 1: Xử dụng tài khoản mật khẩu thường
    // const signUp = ({ name, email, password }) => {
    //     return auth
    //         .createUserWithEmailAndPassword(email, password)
    //         .then((response) => {
    //             console.log(response)
    //         })
    //         .catch((error) => {
    //             return { error };
    //         });
    // };
    // const onSubmit = () => {
    //     return signUp(text).then((user) => {
    //         console.log(user);
    //     });
    // };
    // Cách 2: Xử dụng tài khoản mật khẩu thường và lưu vào collection
    const createUser = (user) => {
        return db
            .collection('users')
            .doc(user.uid)
            .set(user)
            .then(() => {
                console.log('Success');
                message.success('Thêm thành công');
            })
            .catch((error) => {
                console.log(error);
                message.warning('Thất bại');
            });
    };
    const signUp = ({ name, email, password }) => {
        return auth
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                return createUser({ uid: response.user.uid, email, name });
            })
            .catch((error) => {
                message.warning('Thất bại');
                return { error };
            });
    };
    const onSubmit = () => {
        return signUp(data).then((user) => {
            console.log(user);
        });
    };
    const styleItem = { width: 200, marginBottom: 5 };
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ textAlign: 'center', color: 'red', fontSize: 24, ...styleItem }}>SignUp</div>
            <Input placeholder={'name'} onChange={(e) => setData({ ...data, name: e.target.value })} style={styleItem} />
            <Input placeholder={'email'} onChange={(e) => setData({ ...data, email: e.target.value })} style={styleItem} />
            <Input placeholder={'password'} onChange={(e) => setData({ ...data, password: e.target.value })} style={styleItem} />
            <Button onClick={onSubmit}>Ok</Button>
        </div>
    );
}

export default SignUp;
