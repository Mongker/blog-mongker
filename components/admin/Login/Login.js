/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 20/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { Button, Checkbox, Form, Input, Layout } from 'antd';
import { useRouter } from 'next/router'

// style
import style from '../styles/login.module.css';
// import PropTypes from 'prop-types';

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
function Login({login}) {
    const router = useRouter()

    const onFinish = (values) => {
        console.log('Success:', values);
        login(values);
        if(localStorage.getItem('id_admin')){
            router.push('/admin')
        }
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    React.useEffect(() => {
        if(localStorage.getItem('id_admin')){
            router.push('/admin')
        }
    });

    return(
        <Layout style={{ minHeight: '100vh' }}>
            <Layout className={style.site_layout}>
                <div className={style.container}>
                    <div className={style.header}>
                        <h1 className={style.formName}>DAISYSHOP LOGIN FORM</h1>
                    </div>
                    <div className={style.loginForm}>
                        <h2 className={style.h2}>Fill out the form below to login</h2>
                        <Form
                            {...layout}
                            name='basic'
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                        >
                            <div className={style.formItem}>
                                <Form.Item
                                    label='Email'
                                    name='email'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your username!',
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label='Password'
                                    name='password'
                                    rules={[
                                        {
                                            required: true,
                                            message: 'Please input your password!',
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item {...tailLayout} name='remember' valuePropName='checked'>
                                    <Checkbox>Remember me</Checkbox>
                                </Form.Item>

                                <Form.Item {...tailLayout}>
                                    <Button type='primary' htmlType='submit'>
                                        Login
                                    </Button>
                                </Form.Item>
                            </div>
                        </Form>
                    </div>
                </div>
            </Layout>
        </Layout>
    );
}

Login.propTypes = {};

Login.defaultProps = {};

export default Login;
