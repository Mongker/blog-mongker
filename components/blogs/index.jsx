/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 31/01/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import styled from './styles/index.module.css';
import { db } from '../../config/firebase';
import { Button, message } from 'antd';
import { useRouter } from 'next/router';
import useWindowSize from '../hooks/useWindowSize';
// import PropTypes from 'prop-types';

function Blogs() {
    const { height } = useWindowSize();
    const router = useRouter();

    const [data, setData] = React.useState({});

    const nextPagePostNews = () => {
        router.push('/blog/post');
    };
    const getNews = async () =>
        await db.collection('news').onSnapshot((querySnapshot) => {
            let object = {};
            if (querySnapshot.size) {
                // we have something
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.id, ' => ', doc.data());
                    object[doc.id] = doc.data();
                });
            } else {
                // it's empty
                message.warn('Loading');
            }
            setData(object);
        });
    React.useEffect(() => {
        getNews();
        return () => {
            getNews();
        };
    }, []);
    return (
        <div className={styled.news_controller} style={{ height: height }}>
            <Button onClick={nextPagePostNews} type={'primary'} style={{ position: 'absolute', borderRadius: 25, left: '90%', top: '15px' }}>
                Đăng bài
            </Button>
            {Object.values(data).length > 0 &&
                Object.values(data).map((item) => (
                    <div className={styled.post_new_edit} style={{ backgroundColor: '#eef0f1', marginBottom: '10px' }}>
                        <div className={styled.post_title}>{item.title}</div>
                        <div dangerouslySetInnerHTML={{ __html: item.note }} />
                    </div>
                ))}
        </div>
    );
}

Blogs.propTypes = {};

Blogs.defaultProps = {};

export default Blogs;
