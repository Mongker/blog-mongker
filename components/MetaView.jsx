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
            <meta name='robots' content='index, follow' />
            <link rel='icon' href={icon} />
            <meta name='author' content={name} />
            <meta name="keywords" content={description} />

            {/* ROBOTS */}
            <meta name='googlebot' content={'noarchive'} />
            <meta name='robots' content={'noarchive'} />

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
    name: 'Quỳnh Vân',
    icon: 'https://firebasestorage.googleapis.com/v0/b/blog-mongker.appspot.com/o/FaviconWeb%2Ffavicon.ico?alt=media&token=4fe2f924-62b4-44ee-8c18-5097a29adb2d',
    title: 'Mỹ phẩm Quỳnh Vân',
    url: 'https://mongker.cf/',
    image: 'https://firebasestorage.googleapis.com/v0/b/blog-mongker.appspot.com/o/FaviconWeb%2F131338842_2800734746872256_7450134103626634553_n.jpg?alt=media&token=f7826ec4-d40b-4a57-bbf9-63fa98465e46',
    description: 'Mua mỹ phẩm chính hãng - Mỹ phẩm nhập trực tiếp từ Hàn Quốc, Mỹ, Pháp... Giá Tốt. Miễn phí giao hàng tận nơi với đơn hàng trên 700K. Miễn phí hoàn trả trong 7 ngày. Tích luỹ điểm thưởng khi mua hàng tại trên website...',
};

export default MetaView;
