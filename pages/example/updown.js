/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 04/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import UpDownContainer from '../../components/example/UpDown/UpDownContainer';
// import PropTypes from 'prop-types';

function Example1() {
  return <UpDownContainer />;
}

export async function getStaticProps() {
  const res = await fetch('https://server-mybook-1r1b2ebod.vercel.app/api/product');
  // const res = await fetch('https://api.github.com/repositories/42283287');
  console.log('res: ', res);
  const json = await res.json();

  return {
    props: {
      res: json,
    },
  };
}

export default Example1;
