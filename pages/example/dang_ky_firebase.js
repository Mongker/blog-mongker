/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 28/01/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import {Button, Input} from 'antd';
import { auth, db } from '../../config/firebase';
function SignUp() {
    const [data, setData] = React.useState(
        {
            name: '',
            email: '',
            password: '',
        }
    );

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
                console.log("Success")
            })
            .catch((error) => {
                console.log(error)
            });
    };
    const signUp = ({ name, email, password }) => {
        return auth
            .createUserWithEmailAndPassword(email, password)
            .then((response) => {
                return createUser({ uid: response.user.uid, email, name });
            })
            .catch((error) => {
                return { error };
            });
    };
    const onSubmit = () => {
        return signUp(data).then((user) => {
            console.log(user);
        });
    };
    return(
        <div>
            <Input placeholder={'name'} onChange={(e) => setData({...data, name: e.target.value})} />
            <Input placeholder={'email'} onChange={(e) => setData({...data, email: e.target.value})} />
            <Input placeholder={'password'} onChange={(e) => setData({...data, password: e.target.value})} />
            <Button onClick={onSubmit}>Ok</Button>
        </div>
    );
}

export default SignUp;
