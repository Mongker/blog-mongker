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
import { DesktopOutlined, FileOutlined, PieChartOutlined, TeamOutlined, UserOutlined } from '@ant-design/icons';

// const
const { SubMenu } = Menu;

function MenuView(props) {
    const { objectKey, setCheckKey } = props;
    const handleClick = ({ key }) => {
        setCheckKey(key);
    };
    return (
        <Menu theme='dark' defaultSelectedKeys={[objectKey.HOME]} mode='inline' onClick={handleClick} k>
            <Menu.Item key={objectKey.HOME} icon={<PieChartOutlined />}>
                Trang chủ
            </Menu.Item>
            <Menu.Item key={objectKey.DANH_MUC} icon={<DesktopOutlined />}>
                Danh mục
            </Menu.Item>
            <SubMenu key='sub1' icon={<UserOutlined />} title='User'>
                <Menu.Item key='3'>Tom</Menu.Item>
                <Menu.Item key='4'>Bill</Menu.Item>
                <Menu.Item key='5'>Alex</Menu.Item>
            </SubMenu>
            <SubMenu key='sub2' icon={<TeamOutlined />} title='Team'>
                <Menu.Item key='6'>Team 1</Menu.Item>
                <Menu.Item key='8'>Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key={objectKey.LOGOUT} icon={<FileOutlined />}>
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
        DANH_MUC: 'Danh Mục',
    },
    setCheckKey: () => {},
};

export default MenuView;
