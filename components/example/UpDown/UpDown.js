/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 04/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'antd';
import HeadView from '../../HeadView';

function UpDown({ count, onDown, onUp }) {
  return (
    <div>
      <HeadView title={'tăng giảm số'} />
      <h3> React Class Component</h3>
      <h3>Totals: {count}</h3>
      <Button type='primary' onClick={() => onUp(1)}>
        Up (+)
      </Button>
      <Button type='primary' danger onClick={() => onDown(1)}>
        Down (-)
      </Button>
    </div>
  );
}

UpDown.propTypes = {
  onUp: PropTypes.func,
  onDown: PropTypes.func,
  times: PropTypes.number,
};

UpDown.defaultProps = {
  times: 0,
};

export default UpDown;
