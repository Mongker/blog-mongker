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

function HeadView({ title, description, url, image }) {
  return (
    <Head>
      <title>Shop Vân Kelly</title>
      <link
        rel='icon'
        href='https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-1/p200x200/124233278_2773456099600121_8948442255433859966_o.jpg?_nc_cat=111&ccb=2&_nc_sid=7206a8&_nc_ohc=1QngHnmoCYQAX9AZYdI&_nc_ht=scontent.fhan5-3.fna&tp=6&oh=cc4c6ffc1c3c71cb4490d73e6e598076&oe=5FEB7841'
      />
      <meta name='robots' content='index, follow' />
      <meta name='author' content='Quỳnh Vân' />
      {/* SEO google, facebook */}
      <meta property='og:url' content={url} />
      <meta property='og:type' content='article' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
      <meta property='og:image:width' content='600' />
      <meta property='og:image:height' content='315' />
    </Head>
  );
}

HeadView.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  img: PropTypes.string,
};

HeadView.defaultProps = {
  title: 'Mỹ phẩm Quỳnh Vân',
  url: 'https://mongker.cf/',
  image:
    'https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-1/p200x200/124233278_2773456099600121_8948442255433859966_o.jpg?_nc_cat=111&ccb=2&_nc_sid=7206a8&_nc_ohc=1QngHnmoCYQAX9AZYdI&_nc_ht=scontent.fhan5-3.fna&tp=6&oh=cc4c6ffc1c3c71cb4490d73e6e598076&oe=5FEB7841',
  description:
    'Mua mỹ phẩm chính hãng - Mỹ phẩm nhập trực tiếp từ Hàn Quốc, Mỹ, Pháp... Giá Tốt. Miễn phí giao hàng tận nơi với đơn hàng trên 700K. Miễn phí hoàn trả trong 7 ngày. Tích luỹ điểm thưởng khi mua hàng tại trên website...',
};

export default HeadView;
