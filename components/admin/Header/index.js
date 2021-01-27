/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 12/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { MenuOutlined, SearchOutlined, BellOutlined, MailOutlined } from '@ant-design/icons';
import styles from '../styles/header.module.css';
import { Avatar } from 'antd';
import { URL_API } from 'redux/api/config';
import ModalEditInfoContainer from './ModalEditInfo/ModalEditInfoContainer';

function HeaderView(props) {
    const { checkKey } = props;
    const [visible, setVisible] = React.useState(false);
    const [avatar, setAvatar] = React.useState('');
    const [name, setName] = React.useState('');
    React.useEffect(()=> {
        const _avatar = localStorage && localStorage.getItem('avatar_admin') ? `${URL_API.img}${localStorage.getItem('avatar_admin')}` : 'https://scr.vn/wp-content/uploads/2020/07/Avatar-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-n%E1%BB%AF-c%C3%B3-m%C3%A0u.jpg';
        const _name = localStorage && localStorage.getItem('name_admin') ? localStorage.getItem('name_admin') : 'Đăng nhập'
        setAvatar(_avatar);
        setName(_name);
    }, [])
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
                    <Avatar alt='Mountains' src={avatar} width={30} height={30} />
                    <span style={{ fontSize: '12px', fontWeight: 'bold', marginLeft: '5px' }}>{name}</span>
                </div>
            </div>
            <ModalEditInfoContainer visible={visible} setVisible={setVisible} />
        </div>
    );
}

export default HeaderView;
