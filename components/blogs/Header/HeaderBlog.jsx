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
import { LeftOutlined, MenuOutlined } from '@ant-design/icons';

// styles
import styles from './styles/index.module.scss';
// import PropTypes from 'prop-types';

function HeaderBlog() {
    const router = useRouter();
    const [visible, setVisible] = React.useState(false);
    const showOrCloseDrawer = () => {
        setVisible(!visible);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <React.Fragment>
            <div className={styles.page_header}>
                <div className={styles.back_page} onClick={() => router.back()}>
                    <LeftOutlined style={{ color: '#fff' }} />
                </div>
                <div className={styles.page_header_title} onClick={() => router.push('/')}>
                    <img className={styles.page_header_title_avatar} src='https://s240-ava-talk.zadn.vn/8/f/3/5/6/240/499c8cfa904f6c89e44aed82aab25b06.jpg' alt='avatar' />
                    <div className={styles.page_header_title_title}>Blog Mongker</div>
                </div>
                <div className={styles.page_header_menu} onClick={showOrCloseDrawer}>
                    <MenuOutlined style={{ color: '#fff' }} />
                    {/*<Button onClick={nextPagePostNews} type={'primary'} style={{ position: 'absolute', borderRadius: 25, left: '90%', top: '15px' }}>*/}
                    {/*    Đăng bài*/}
                    {/*</Button>*/}
                </div>
            </div>
            <Drawer
                className={styles.drawer}
                title='Đang phát triển '
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </React.Fragment>
    );
}

HeaderBlog.propTypes = {};

HeaderBlog.defaultProps = {};

export default HeaderBlog;
