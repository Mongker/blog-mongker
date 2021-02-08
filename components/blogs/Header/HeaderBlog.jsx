/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 06/02/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { useRouter } from 'next/router';
import {Drawer} from 'antd';
import { LeftOutlined, MenuOutlined, SearchOutlined } from '@ant-design/icons';

// styles
import styles from './styles/index.module.scss';
// import PropTypes from 'prop-types';

// const
const icon = 'https://firebasestorage.googleapis.com/v0/b/blog-mongker.appspot.com/o/FaviconWeb%2Funnamed.jpg?alt=media&token=c3fdea63-c3c0-4370-9cc9-4e59a0dc14b9';

function HeaderBlog() {
    const router = useRouter();
    const [visible, setVisible] = React.useState(false);
    const showOrCloseDrawer = () => {
        setVisible(!visible);
    };
    const onClose = () => {
        setVisible(false);
    };
    const handleBackPage = () => router.back();
    const menu = <div className={styles.menu}>Menu</div>;
        return (
        <React.Fragment>
            <div className={styles.page_header}>
                <div className={styles.page_header_title} onClick={() => router.push('/blog')}>
                    <img className={styles.page_header_title_avatar} src={icon} alt='avatar' />
                    <div className={styles.page_header_title_title}>Sinh Viên Review</div>
                </div>
                <div className={styles.back_page} onClick={() => {}}>
                    <SearchOutlined style={{ color: '#fff' }} />
                </div>
                <div className={styles.page_header_menu} onClick={showOrCloseDrawer}>
                    <MenuOutlined style={{ color: '#fff' }} />
                </div>
            </div>
            <Drawer
                className={styles.drawer}
                title={menu}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <div>Login</div>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </React.Fragment>
    );
}

HeaderBlog.propTypes = {};

HeaderBlog.defaultProps = {};

export default HeaderBlog;
