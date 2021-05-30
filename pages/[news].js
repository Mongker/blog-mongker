/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 02/02/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { db } from '../config/firebase';
import NewsDetail from '../components/blogs/News/NewsDetail/NewsDetail';
import MetaView from '../components/MetaView';
// import PropTypes from 'prop-types';

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
// export async function getStaticPaths() {
//     return { paths: [], fallback: true };
// }
//
// export async function getStaticProps(params) {
//     console.log('xxxx', params); // MongLV log fix bug
//     const res = await getNews(params['params'].news);
//     console.log('res', res); // MongLV log fix bug
//     return {
//         props: {...res},
//     };
// }

/* Note by MongLV: Server side render */
export async function getServerSideProps(context) {
    const { params } = context;
    const res = await getNews(params.news);
    if (!res) {
        return {
            redirect: {
                destination: '/404',
                permanent: false,
            },
        }
    }
    return { props: { ... res} };
}

function news(props) {
    const data = {
        name: 'Blog Mongker',
        icon: 'https://s240-ava-talk.zadn.vn/8/f/3/5/6/240/499c8cfa904f6c89e44aed82aab25b06.jpg',
        title: props.title,
        url: `https://mongker.cf/${props.uid}`,
        image: props.photo_news,
        description: props.description,
    };
    return <React.Fragment>
        <MetaView {...data} />
        <NewsDetail {...props} />
    </React.Fragment>;
}

export default news;
