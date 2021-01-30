/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 30/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import typeAction from '../../actions/typeAction';
const initialState = {};

function Login(data = initialState, action) {
    switch (action.type) {
        case typeAction.SHOP_MY_PHAM.LOGIN_ADMIN:
            return action.login;
        case typeAction.SHOP_MY_PHAM.LOGIN_UPDATE:
            return action.step;
        default:
            return data;
    }
}

export default Login;
