/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 14/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// import thu vien
import { Form, Input, Button, Checkbox, Layout } from 'antd';
// import Image from 'next/image';
import style from '../components/admin/styles/login.module.css';
import Login from '../components/admin/Login/Login';
import LoginContainer from '../components/admin/Login/LoginContainer';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};
function login_admin() {

    return (<LoginContainer />);
}
export default login_admin;
