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

function HeaderView(props) {
    const { checkKey } = props;
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
                <div className={styles.logo}>
                    <Avatar alt='Mountains' src={'https://scr.vn/wp-content/uploads/2020/07/Avatar-m%E1%BA%B7c-%C4%91%E1%BB%8Bnh-n%E1%BB%AF-c%C3%B3-m%C3%A0u.jpg'} width={30} height={30} />
                    <span style={{ fontSize: '12px', fontWeight: 'bold', marginLeft: '5px' }}>Đào Thị Thanh Mai</span>
                </div>
            </div>
        </div>
    );
}

export default HeaderView;
