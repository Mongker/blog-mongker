/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 02/02/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { db } from '../../config/firebase';
import NewsDetail from '../../components/blogs/News/NewsDetail/NewsDetail';
import MetaView from '../../components/MetaView';
import HeaderBlog from '../../components/blogs/Header/HeaderBlog';
// import PropTypes from 'prop-types';

// const
const icon = 'https://firebasestorage.googleapis.com/v0/b/blog-mongker.appspot.com/o/FaviconWeb%2Funnamed.jpg?alt=media&token=c3fdea63-c3c0-4370-9cc9-4e59a0dc14b9';

const getNews = async (url) => {
   let obj = {};
   try {
       await db
           .collection('news')
           .doc(url)
           .get()
           .then(function (doc) {
               console.log('Cached document data:', doc.data());
               obj = doc.data();
           })
           .catch(function (error) {
               console.log('lỗi:', error);
           });
   } catch (e) {
       console.log('lỗi:', e);
   }
   return obj;
};
export async function getStaticPaths() {
    return { paths: [], fallback: true };
}
export async function getStaticProps(params) {
    const res = await getNews(params['params'].news);
    return {
        props: {...res},
    };
}

function news(props) {
    const data = {
        name: 'Blog Mongker',
        icon: icon,
        title: props.title,
        url: `https://mongker.cf/${props.uid}`,
        image: props.photo_news,
        description: props.description,
    };
    return <React.Fragment>
        <MetaView {...data} />
        <HeaderBlog />
        <NewsDetail {...props} />
    </React.Fragment>;
}

export default news;
