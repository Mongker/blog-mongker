/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 05/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
import React from 'react';
import PropTypes from 'prop-types';
import HeadView from '../../HeadView';

function ABook({ product }) {
  const index = Math.floor(Math.random() * 10);
  const arrProduct = Object.keys(product);
  const dataObj = product[arrProduct[index]];
  console.log('dataObj: ', dataObj);
  return (
    <div>
      <HeadView
        title={dataObj.name}
        description={dataObj.description}
        image={`https://server-mybook-1r1b2ebod.vercel.app/api/file/${dataObj.image_link[0]}`}
        icon={`https://server-mybook-1r1b2ebod.vercel.app/api/file/${dataObj.image_link[0]}`}
        name={dataObj.name}
      />
      Mong
    </div>
  );
}

ABook.propTypes = {
  product: PropTypes.object,
};

ABook.defaultProps = {
  product: {},
};

export default ABook;
