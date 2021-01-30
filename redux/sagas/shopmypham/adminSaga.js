/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 20/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import { call, put, take } from 'redux-saga/effects';

// action types
import typeAction from '../../actions/typeAction';

// api
import { getListAdmin_API } from '../../api/admin/getList';
import { deleteAdmin } from '../../api/admin/delete';
import { putAdmin } from '../../api/admin/put';
import { postAdmin } from '../../api/admin/post';
import { getLoginAdmin } from '../../api/admin/login';
// import {getAdminID} from '../../admin/getAdminID';

// -------------------------------------- watcher Action --------------------------------------/
export function* watcherCallListAdmin() {
    while (true) {
        yield take(typeAction.SHOP_MY_PHAM.ADMIN_CALL_GET);
        yield call(doCallListAdmin);
    }
}

export function* watcherCallDeleteAdmin() {
    while (true) {
        const takeAction = yield take(typeAction.SHOP_MY_PHAM.ADMIN_DELETE);
        const { payload } = takeAction;
        console.log('payload', payload);
        yield deleteAdmin(payload.id);
        yield call(doCallListAdmin);
    }
}
export function* watcherCallPostAdmin() {
    while (true) {
        const takeAction = yield take(typeAction.SHOP_MY_PHAM.ADMIN_POST);
        const { payload } = takeAction;
        yield postAdmin(payload.data);
        yield call(doCallListAdmin);
    }
}
export function* watcherCallUpdateAdmin() {
    while (true) {
        const takeAction = yield take(typeAction.SHOP_MY_PHAM.ADMIN_PUT);
        const { payload } = takeAction;
        yield putAdmin(payload.id, payload.data);
        yield call(doCallListAdmin);
        if (payload.id === localStorage.getItem('id_admin')) {
            yield put({ type: typeAction.SHOP_MY_PHAM.ADMIN_LOGIN });
        }
    }
}
export function* watcherLoginAdmin() {
    while (true) {
        const takeAction = yield take(typeAction.SHOP_MY_PHAM.ADMIN_LOGIN);
        const { payload } = takeAction;
        const dataLogin = yield getLoginAdmin(payload.data);
        localStorage.removeItem('token_admin');
        localStorage.removeItem('id_admin');
        localStorage.removeItem('email_admin');
        localStorage.removeItem('avatar_admin');
        if (dataLogin && Object.keys(dataLogin).length > 1) {
            console.log('dataLogin', dataLogin);
            localStorage.setItem('token_admin', dataLogin.password);
            localStorage.setItem('id_admin', dataLogin.id_admin);
            localStorage.setItem('email_admin', dataLogin.email);
            if (dataLogin.message === 'SUCCESS') {
                yield payload.funcCallBackSuccess();
                yield put({ type: typeAction.SHOP_MY_PHAM.LOGIN_ADMIN, login: dataLogin });
            }
        }
    }
}
// export function* watcherGetAdminId() {
//     while (true) {
//         const takeAction = yield take(ADMIN.GET_ADMIN);
//         const {payload} = takeAction;
//         const use_admin = yield getAdminID(payload.id);
//         yield put({type: ADMIN.GET_ADMIN_DATA, use_admin});
//     }
// }

// -------------------------------------- do Saga ---------------------------------------/
export function* doCallListAdmin() {
    const admin = yield getListAdmin_API();
    debugger; // MongLV
    yield put({ type: typeAction.SHOP_MY_PHAM.ADMIN_GET, admin });
}
