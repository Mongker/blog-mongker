/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 24/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

function MetaView({ title, description, url, image, icon, name }) {
    return (
        <Head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title>{title}</title>
            <meta name="description" content={description} />

            <link rel='icon' href={icon} />
            <meta name='author' content={name} />
            <meta name="keywords" content={description} />

            {/* ROBOTS */}
            <meta name='robots' content='index, follow' />

            {/* SEO google, facebook */}
            <meta property='og:description' content={description} />
            <meta property='og:url' content={url} />
            <meta property='og:title' content={title} />
            <meta property='og:type' content='article' />
            <meta property='og:image' content={image} />
            <meta property="og:image:width" content="720" />
            <meta property="og:image:height" content="480" />
        </Head>
    );
}

MetaView.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
    url: PropTypes.string,
    img: PropTypes.string,
};

MetaView.defaultProps = {
    name: 'Mongker Media',
    icon: 'https://s240-ava-talk.zadn.vn/8/f/3/5/6/240/499c8cfa904f6c89e44aed82aab25b06.jpg',
    title: 'Mongker Media',
    url: 'https://mongker.cf/',
    image: 'https://s240-ava-talk.zadn.vn/8/f/3/5/6/240/499c8cfa904f6c89e44aed82aab25b06.jpg',
    description: 'Website là nơi chia sẽ kiến thức lập trình theo góc nhìn của mình, mong những kiến thức của mình có thể giúp đỡ các bạn trong công cuộc kiến thiết bản thân của mình.',
};

export default MetaView;
