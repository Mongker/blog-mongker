/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 12/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { Menu } from 'antd';
import PropTypes from 'prop-types';
import { LogoutOutlined, DollarOutlined, ShoppingCartOutlined, UserOutlined, HomeOutlined, UnorderedListOutlined } from '@ant-design/icons';

// const
const { SubMenu } = Menu;

function MenuView(props) {
    const { objectKey, setCheckKey } = props;
    const handleClick = ({ key }) => {
        setCheckKey(key);
    };
    return (
        <Menu theme='dark' defaultSelectedKeys={[objectKey.HOME]} mode='inline' onClick={handleClick} k>
            <Menu.Item key={objectKey.HOME} icon={<HomeOutlined />}>
                Trang chủ
            </Menu.Item>
            <Menu.Item key={objectKey.DANH_MUC} icon={<UnorderedListOutlined />}>
                Danh mục
            </Menu.Item>
            <Menu.Item key={objectKey.SAN_PHAM} icon={<DollarOutlined />}>
                Sản phẩm
            </Menu.Item>
            <Menu.Item key={objectKey.DON_DAT_HANG} icon={<ShoppingCartOutlined />}>
                Đơn đặt hàng
            </Menu.Item>
            <Menu.Item key={objectKey.KHACH_HANG} icon={<UserOutlined />}>
                Khách hàng
            </Menu.Item>
            <Menu.Item key={objectKey.NHAN_VIEN} icon={<UserOutlined />}>
                Nhân viên
            </Menu.Item>
            <Menu.Item key={objectKey.LOGOUT} icon={<LogoutOutlined />}>
                Đăng xuất
            </Menu.Item>
        </Menu>
    );
}

MenuView.propTypes = {
    objKeyMenu: PropTypes.object,
    setCheckKey: PropTypes.func,
};

MenuView.defaultProps = {
    objKeyMenu: {
        HOME: 'Trang chủ',
        DANH_MUC: 'Danh mục',
        SAN_PHAM: 'Sản phẩm',
        DON_DAT_HANG: 'Đơn đặt hàng',
        KHACH_HANG: 'Quản lý khách hàng',
        NGUOI_DUNG: 'Quản lý tài khoản',
        LOGOUT: 'Đăng xuất',
    },
    setCheckKey: () => {},
};

export default MenuView;
