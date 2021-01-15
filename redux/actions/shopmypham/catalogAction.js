/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 14/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import typeAction from '../../actions/typeAction';
import createActionNoAppID from '../../../util/createActionNoAppID';

export const getList = (payload) => createActionNoAppID(typeAction.SHOP_MY_PHAM.CALL_GET_LIST_CATALOG, payload);
