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
import styles from '../styles/index.module.css';

function ContentView(props) {
    const { checkKey } = props;
    return (
        <div>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>User</Breadcrumb.Item>
                <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className={styles.site_layout_background} style={{ padding: 24, minHeight: 360 }}>
                {checkKey}
            </div>
        </div>
    );
}

export default ContentView;
