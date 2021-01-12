/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 12/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Layout } from 'antd';
// jsx
import HeaderView from './Header';
import ContentView from './Content';
import FooterView from './Footer';
import MenuView from './Menu/MenuView';

// style
import styles from './styles/index.module.css';

// const
const { Header, Content, Footer, Sider } = Layout;
const objectKey = {
    HOME: 'Trang chu',
    DANH_MUC: 'Danh muc',
    LOGOUT: 'Dang xuat',
};
function Admin() {
    const [collapsed, setCollapsed] = React.useState(false);
    const [checkKey, setCheckKey] = React.useState(objectKey.HOME);
    const onCollapse = (collapsed) => {
        console.log(collapsed);
        setCollapsed(collapsed);
    };
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className={styles.logo} />
                <MenuView objectKey={objectKey} setCheckKey={setCheckKey} />
            </Sider>
            <Layout className={styles.site_layout}>
                <Header className={styles.site_layout_background} style={{ padding: 0 }}>
                    <HeaderView checkKey={checkKey} />
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <ContentView checkKey={checkKey} />
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    <FooterView checkKey={checkKey} />
                </Footer>
            </Layout>
        </Layout>
    );
}

Admin.propTypes = {};

Admin.defaultProps = {};

export default Admin;
