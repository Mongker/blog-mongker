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

function HeadView() {
    return(
      <Head>
        <title>Log Bug</title>
        <link rel='icon' href='https://www.flaticon.com/svg/static/icons/svg/3779/3779253.svg' />
        <meta name='description' content='Cuộc sống em khỏe không' />
        <meta name='robots' content='index, follow' />
        <meta name='author' content='mongker' />
        <meta property='og:url' content='https://developers.zalo.me/' />
        <meta property='og:title' content='Zalo For Developers' />
        <meta property='og:image' content='https://developers.zalo.me/web/static/prodution/zalo.png' />
        <meta property='og:description' content='Trang thông tin về Zalo dành cho cộng đồng lập trình viên' />
      </Head>
    );
}

HeadView.propTypes = {

};

HeadView.defaultProps = {};

export default HeadView;
