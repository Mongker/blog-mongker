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

function HeadView({ title, description, url, image, icon, name }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href={icon} />
      <meta name='robots' content='index, follow' />
      <meta name='author' content={name} />
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
  name: 'Quỳnh Vân',
  icon:
    'https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/131338842_2800734746872256_7450134103626634553_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=QWziK15JU0gAX8ttkzY&_nc_ht=scontent.fhan2-6.fna&oh=995cfd23ad9f9018c8998741da62d7c4&oe=601818BD',
  title: 'Mỹ phẩm Quỳnh Vân',
  url: 'https://mongker.cf/',
  image:
    'https://scontent.fhan2-6.fna.fbcdn.net/v/t1.0-9/131338842_2800734746872256_7450134103626634553_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=QWziK15JU0gAX8ttkzY&_nc_ht=scontent.fhan2-6.fna&oh=995cfd23ad9f9018c8998741da62d7c4&oe=601818BD',
  description:
    'Mua mỹ phẩm chính hãng - Mỹ phẩm nhập trực tiếp từ Hàn Quốc, Mỹ, Pháp... Giá Tốt. Miễn phí giao hàng tận nơi với đơn hàng trên 700K. Miễn phí hoàn trả trong 7 ngày. Tích luỹ điểm thưởng khi mua hàng tại trên website...',
};

export default HeadView;
