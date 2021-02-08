/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 31/01/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import Blogs from '../../components/blogs';
import MetaView from '../../components/MetaView';
import HeaderBlog from '../../components/blogs/Header/HeaderBlog';

// const
const icon = 'https://firebasestorage.googleapis.com/v0/b/blog-mongker.appspot.com/o/FaviconWeb%2Funnamed.jpg?alt=media&token=c3fdea63-c3c0-4370-9cc9-4e59a0dc14b9';

function Index() {
    const data = {
        name: 'Blog Mongker',
        icon: icon,
        title: 'Blog Mongker nới chia sẽ kiến thức lập trình',
        url: 'https://mongker.cf/',
        image: 'https://s240-ava-talk.zadn.vn/8/f/3/5/6/240/499c8cfa904f6c89e44aed82aab25b06.jpg',
        description: 'Website là nơi chia sẽ kiến thức lập trình theo góc nhìn của mình, mong những kiến thức của mình có thể giúp đỡ các bạn trong công cuộc kiến thiết bản thân của mình.',
    };
    return (
        <React.Fragment>
            <MetaView {...data} />
            <HeaderBlog />
            <Blogs />
        </React.Fragment>
    );
}

export default Index;
