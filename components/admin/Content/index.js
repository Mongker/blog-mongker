/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 12/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { Breadcrumb } from 'antd';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

// style
import styles from '../styles/index.module.css';

// JSX
import DanhMucContaier from './DanhMuc/DanhMucContainer';
import Home from './Home/TrangChu';

function ContentView(props) {
    const { checkKey, objectKey } = props;
    let componentContent;
    if (checkKey === objectKey.DANH_MUC) {
        componentContent = <DanhMucContaier />;
    } else if (checkKey === objectKey.HOME) {
        componentContent = <Home />;
    }

    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item href=''>
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href=''>
                    <span>{checkKey}</span>
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.site_layout_background} style={{ padding: 24, minHeight: 360 }}>
                {componentContent}
            </div>
        </div>
    );
}

export default ContentView;
