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
  return (
    <Head>
      <title>Log Bug</title>
      <link
        rel='icon'
        href='https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-1/p200x200/124233278_2773456099600121_8948442255433859966_o.jpg?_nc_cat=111&ccb=2&_nc_sid=7206a8&_nc_ohc=1QngHnmoCYQAX9AZYdI&_nc_ht=scontent.fhan5-3.fna&tp=6&oh=cc4c6ffc1c3c71cb4490d73e6e598076&oe=5FEB7841'
      />
      <meta name='description' content='Shop mỹ phẩm Vân Kelly' />
      <meta name='robots' content='index, follow' />
      <meta name='author' content='Vân Kelly' />
      <meta property='og:url' content='https://developers.zalo.me/' />
      <meta property='og:title' content='Shop Vân Kelly' />
      <meta
        property='og:image'
        content='https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-1/p200x200/124233278_2773456099600121_8948442255433859966_o.jpg?_nc_cat=111&ccb=2&_nc_sid=7206a8&_nc_ohc=1QngHnmoCYQAX9AZYdI&_nc_ht=scontent.fhan5-3.fna&tp=6&oh=cc4c6ffc1c3c71cb4490d73e6e598076&oe=5FEB7841'
      />
      <meta property='og:description' content='Shop mỹ phẩm Vân Kelly ' />
    </Head>
  );
}

HeadView.propTypes = {};

HeadView.defaultProps = {};

export default HeadView;
