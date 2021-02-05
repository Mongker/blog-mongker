/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 31/01/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import styled from './styles/index.module.scss';
import { db } from '../../config/firebase';
import { Button, message } from 'antd';
import { useRouter } from 'next/router';
import useWindowSize from '../hooks/useWindowSize';
import ListNewsDetail from './News/ListNewsDetail/ListNewsDetail';
import getNews from '../../util/getNews';
import ListNewsReview from './News/ListNewsReview/ListNewsReview';
// import PropTypes from 'prop-types';

function Blogs() {
    const { height, width } = useWindowSize();
    const router = useRouter();

    const [data, setData] = React.useState({});

    const nextPagePostNews = () => {
        router.push('/blog/post');
    };
    React.useEffect(() => {
        getNews(setData)
        return () => {
            getNews(setData({}));
        };
    }, []);
    return (
        <div className={styled.news_controller} style={{ width: width }}>
            <Button onClick={nextPagePostNews} type={'primary'} style={{ position: 'absolute', borderRadius: 25, left: '90%', top: '15px' }}>
                Đăng bài
            </Button>
            <ListNewsReview data={data} />
        </div>
    );
}

Blogs.propTypes = {};

Blogs.defaultProps = {};

export default Blogs;
