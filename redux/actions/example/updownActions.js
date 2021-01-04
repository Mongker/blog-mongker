/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 04/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import typeAction from '../typeAction';

export const actionUp = (step) => {
  return {
    type: typeAction.UP,
    step: step,
  };
};

export const actionDown = (step) => {
  return {
    type: typeAction.UP,
    step: step,
  };
};
