/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 04/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import axios from 'axios';

// components
import UpDownContainer from '../../components/example/UpDown/UpDownContainer';

function Example1({ product = {} }) {
  return <UpDownContainer product={product} />;
}

// Note sau này phải tạo file API base để xử lý
function getListProduct_API() {
  return axios
    .get(`https://server-mybook-1r1b2ebod.vercel.app/api/product`)
    .then((res) => res.data)
    .catch((error) => console.log(error));
}

export async function getStaticProps(content) {
  const res = await getListProduct_API();
  return {
    props: {
      product: res,
    },
  };
}

export default Example1;
