/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 16/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import Head from 'next/head';
import Link from 'next/link';
import { Layout, Menu, Breadcrumb } from 'antd';

// styles
import 'antd/dist/antd.css';
import '../styles/index.module.css';
import React from 'react';
// import styles from '../styles/Home.module.css';

// component
import Test from './Test';

// const
const { Header, Content, Footer } = Layout;

function Home() {
  return (
    <div>
      <Head>
        <title>Log Bug</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='description' content='Mong đẹp trai nhất làng' />
        <meta />
        <meta property='og:image' content='https://i.ytimg.com/vi/XVN4FTLImC0/maxresdefault.jpg' />
        <meta property='og:title' content='Test Noi Dung' />
        <meta property='og:description' content='tes noi dung xem co ra gi khong' />
      </Head>
      <Layout className='layout'>
        <Header>
          <div className='logo' />
          <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['1']}>
            <Menu.Item key='1'>
              <Link href='/Test'>New Bug</Link>
            </Menu.Item>
            <Menu.Item key='2'>Chủ đề</Menu.Item>
            <Menu.Item key='3'>Bảng tin</Menu.Item>
            <Menu.Item key='4'>Review</Menu.Item>
            <Menu.Item key='5'>Ảnh chế</Menu.Item>
            <Menu.Item key='6'>Rút gọn link</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className='site-layout-content'>
            <Test />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Mongker ©2018 Created by Ant UED</Footer>
      </Layout>
    </div>
  );
}

export default Home;
