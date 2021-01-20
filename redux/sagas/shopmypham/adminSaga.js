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
import {getListAdmin_API} from '../../api/admin/getList';
import {deleteAdmin} from '../../api/admin/delete';
import {putAdmin} from '../../api/admin/put';
import {postAdmin} from '../../api/admin/post';
import {getLoginAdmin} from '../../api/admin/login';
// import {getAdminID} from '../../admin/getAdminID';

// -------------------------------------- watcher Action --------------------------------------/
// export function* watcherCallListAdmin() {
//     while (true) {
//         yield take(ADMIN.CALL_GET_LIST);
//         yield call(doCallListAdmin);
//     }
// }
//
// export function* watcherCallDeleteAdmin() {
//     while (true) {
//         const takeAction = yield take(ADMIN.CALL_DELETE);
//         const {payload} = takeAction;
//         yield deleteAdmin(payload);
//         yield call(doCallListAdmin);
//     }
// }
export function* watcherCallPostAdmin() {
    while (true) {
        const takeAction = yield take(typeAction.SHOP_MY_PHAM.ADMIN_POST);
        const {payload} = takeAction;
        yield postAdmin(payload.data);
        yield call(doCallListAdmin);
    }
}
// export function* watcherCallUpdateAdmin() {
//     while (true) {
//         const takeAction = yield take(ADMIN.CALL_PUT);
//         const {payload} = takeAction;
//         yield putAdmin(payload._id, payload);
//         yield call(doCallListAdmin);
//     }
// }
// export function* watcherLoginAdmin() {
//     while (true) {
//         const takeAction = yield take(ADMIN.LOGIN);
//         const {payload} = takeAction;
//         // const payload = takeAction.payload,
//         // payload.data = { email : '?', passwold: '?'}
//         const dataLogin = yield getLoginAdmin(payload.data);
//         // dataLogin = {...} => Object.keys(dataLogin) biến thành 1 mảng để đồ dài của mảng
//         if(dataLogin && Object.keys(dataLogin).length > 1) {
//             localStorage.setItem('token_admin', dataLogin.password);
//             localStorage.setItem('id_admin', dataLogin.id_admin);
//             localStorage.setItem('email_admin', dataLogin.email);
//         }
//     }
// }
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
    yield put({type: typeAction.SHOP_MY_PHAM.ADMIN_GET, admin});
}
