import React from 'react';
// import PropTypes from 'prop-types';
import HeadView from  '../components/HeadView'
import { Layout, Menu } from 'antd';

// styles
// import styles from '../styles/index.css'
const { Header, Content, Footer } = Layout;
function Index() {
    return(
        <div className={'root-container'}>
          <HeadView />
          <Layout>
            <Header>
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
          <style jsx>{`
            .root-container { font-family: "Times New Roman";}
            .root-container header .ant-layout-header { padding-left: 50%;}
          `}</style>
        </div>
    );
}

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
