/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 12/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { MenuOutlined, SearchOutlined, BellOutlined, MailOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
import { URL_API } from 'redux/api/config';

// component
import ModalEditInfoContainer from './ModalEditInfo/ModalEditInfoContainer';

// styles
import styles from '../styles/header.module.css';
import typeAction from 'redux/actions/typeAction';

function HeaderView() {
    const router = useRouter();
    const [visible, setVisible] = React.useState(false);
    const nextPage = () => {
        router.push('/admin');
    };
    const dataLogin = useSelector((state) => state.Login);
    const dispatch = useDispatch();
    const dispatchCheckLogin = (data, nextPage) => dispatch({ type: typeAction.SHOP_MY_PHAM.ADMIN_LOGIN, payload: { data: data, funcCallBackSuccess: nextPage } });

    React.useEffect(() => {
        if (localStorage.getItem('id_admin')) {
            const data = {
                email: localStorage.getItem('email_admin'),
                password: localStorage.getItem('token_admin'),
            };
            dispatchCheckLogin(data, nextPage);
        }
    }, []);

    return (
        <div className={styles.header_container}>
            <div className={styles.header_left}>
                <div className={styles.menu}>
                    <MenuOutlined />
                </div>
                <div>
                    <SearchOutlined />
                </div>
            </div>
            <div className={styles.header_right}>
                <div>
                    <BellOutlined />
                </div>
                <div className={styles.email}>
                    <MailOutlined />
                </div>
                <div className={styles.logo} onClick={() => setVisible(true)}>
                    <Avatar alt={dataLogin.name} src={`${URL_API.img}${dataLogin.avatar}`} width={30} height={30} />
                    <span style={{ fontSize: '12px', fontWeight: 'bold', marginLeft: '5px' }}>{dataLogin.name}</span>
                </div>
            </div>
            <ModalEditInfoContainer visible={visible} setVisible={setVisible} />
        </div>
    );
}

export default HeaderView;
