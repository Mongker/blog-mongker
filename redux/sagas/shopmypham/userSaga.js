/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 21/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import { call, put, take } from 'redux-saga/effects';

// action types
import typeAction from '../../actions/typeAction';

// api
import {getListUser} from '../../api/user/getList';
// import {deleteAdmin} from '../../api/admin/delete';
// import {putAdmin} from '../../api/admin/put';
// import {postAdmin} from '../../api/admin/post';
// import {getAdminID} from '../../api/admin/getAdminID';

// -------------------------------------- watcher Action --------------------------------------/
export function* watcherCallListUser() {
    while (true) {
        yield take(typeAction.SHOP_MY_PHAM.USER_CALL_GET);
        debugger; // MongLV
        yield call(doCallListUser);
    }
}

// -------------------------------------- do Saga ---------------------------------------/
export function* doCallListUser() {
    const user = yield getListUser();
    debugger; // MongLV
    yield put({type: typeAction.SHOP_MY_PHAM.USER_GET, user});
}
