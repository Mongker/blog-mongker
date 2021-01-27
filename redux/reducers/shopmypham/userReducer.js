/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 21/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// action types
import typeAction from '../../actions/typeAction';

const User = (state = {}, action) => {
    switch (action.type) {
        case typeAction.SHOP_MY_PHAM.USER_GET:
            return action.user;
        default:
            return state;
    }
};

export default User;
