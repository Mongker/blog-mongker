/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 04/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import typeAction from '../../actions/typeAction';
const initialState = 0;

function Counts(count = initialState, action) {
  switch (action.type) {
    case typeAction.UP:
      return count + action.step;
    case typeAction.DOWN:
      return count - action.step;
    default:
      return count;
  }
}

export default Counts;
