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
// import {getListProduct_IDCatalog} from 'src/api/product/getListIdCatalog';
import {postProduct} from '../../api/product/post';
import {deleteProduct} from '../../api/product/delete';
import {putProduct} from '../../api/product/put';
import {getListProduct_API} from '../../api/product/getList';

// -------------------------------------- watcher Action --------------------------------------/
// export function* watcherCallListIDCatalog() {
//     while (true) {
//         const takeAction = yield take(PRODUCT.CALL_GET_LIST_ID_CATALOG);
//         const {payload} = takeAction;
//         const {id} = payload;
//         if(id) {
//             localStorage.setItem('id_click_catalog', id);
//             yield put({type: 'RUN_ListIDCatalog', id});
//         }
//     }
// }
// export function * watcherGetListIDCatalog() {
//     while (true) {
//         const takeAction = yield take('RUN_ListIDCatalog');
//         const {id} = takeAction;
//         const product = yield getListProduct_IDCatalog(id || localStorage.getItem('id_click_catalog'));
//         console.log(localStorage.getItem('id_click_catalog'));
//         yield put({type: PRODUCT.GET_LIST_ID_CATALOG, product});
//     }
// }
//
export function* watcherCallPostProduct() {
    while (true) {
        const takeAction = yield take(typeAction.SHOP_MY_PHAM.PRODUCT_POST);
        const {payload} = takeAction;
        yield postProduct(payload.data);
        yield call(doCallListProduct);
    }
}
export function * watcherCallDeleteProduct() {
    while (true) {
        const takeAction = yield take(typeAction.SHOP_MY_PHAM.PRODUCT_DELETE);
        const {payload} = takeAction;
        yield deleteProduct(payload.id);
        yield call(doCallListProduct);
    }
}

export function* watcherPutProduct() {
    while (true) {
        const takeAction = yield take(typeAction.SHOP_MY_PHAM.PRODUCT_PUT);
        const {payload} = takeAction;
        const {id, data} = payload;
        yield putProduct(id, data);
        yield call(doCallListProduct);
    }
}

export function* watcherGetListProduct() {
    while (true) {
        yield take(typeAction.SHOP_MY_PHAM.PRODUCT_CALL_GET);
        yield call(doCallListProduct);
    }
}

// -------------------------------------- do Saga ---------------------------------------/

export function* doCallListProduct() {
    const product = yield getListProduct_API();
    yield put({type: typeAction.SHOP_MY_PHAM.PRODUCT_GET, product});
}
