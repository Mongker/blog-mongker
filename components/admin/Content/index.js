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
import SanPhamContainer from './SanPham/SanPhamContainer';
import DonDatHangContainer from './DonDatHang/DonDatHangContainer';
import KhanhHang from './KhanhHang/KhanhHang';
import NhanVien from './NhanVien/NhanVien';

function ContentView(props) {
    const { checkKey, objectKey } = props;
    let componentContent;
    switch (checkKey) {
            case objectKey.DANH_MUC:
                componentContent = <DanhMucContaier />;
                break;
            case objectKey.HOME:
                componentContent = <Home />;
                break;
            case objectKey.SAN_PHAM:
                componentContent = <SanPhamContainer />;
                break;
            case objectKey.DON_DAT_HANG:
                componentContent = <DonDatHangContainer />;
                break;
            case objectKey.KHACH_HANG:
                componentContent = <KhanhHang />;
                break;
            case objectKey.NHAN_VIEN:
                componentContent = <NhanVien />;
                break;
            default:
            // code block
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
            <div className={styles.site_layout_background} style={{ padding: 24, minHeight: 360, borderRadius: '4%' }}>
                {componentContent}
            </div>
        </div>
    );
}

export default ContentView;
