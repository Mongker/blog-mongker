/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 13/10/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
import { call, put, take } from 'redux-saga/effects';

// action types
import typeAction from '../../actions/typeAction';

// api
import { getListCatalog_API } from '../../api/catalog/getList';
// import { postCatalog } from 'src/api/catalog/post';
// import { putCatalog } from 'src/api/catalog/put';
// import { deleteCatalog } from 'src/api/catalog/delete';

// -------------------------------------- watcher Action --------------------------------------/
export function* watcherCallListCatalog() {
    while (true) {
        yield take(typeAction.SHOP_MY_PHAM.CALL_GET_LIST_CATALOG);
        debugger; // MongLV
        yield call(doCallListCatalog);
    }
}

// -------------------------------------- do Saga ---------------------------------------/
export function* doCallListCatalog() {
    const catalog = yield getListCatalog_API();
    console.log('catalog', catalog);
    yield put({ type: typeAction.SHOP_MY_PHAM.GET_LIST_CATALOG, catalog });
}
