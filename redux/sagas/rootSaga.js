/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mong_Le_Van on 09/09/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import { all } from 'redux-saga/effects';

// watch saga
import { watcherCallListCatalog, watcherCallPostCatalog, watcherCallDeleteCatalog, watcherCallPutCatalog } from './shopmypham/catalogSaga';
import { watcherGetListProduct, watcherCallPostProduct, watcherCallDeleteProduct, watcherPutProduct } from './shopmypham/productSaga';
import { watcherCallPostAdmin, watcherCallListAdmin, watcherCallDeleteAdmin, watcherLoginAdmin, watcherCallUpdateAdmin } from './shopmypham/adminSaga';
import {watcherCallListUser} from './shopmypham/userSaga';

// saga
export default function* rootSaga() {
    yield all([watcherCallListCatalog(), watcherCallPostCatalog(), watcherCallDeleteCatalog(), watcherCallPutCatalog(), watcherGetListProduct(), watcherCallPostProduct(), watcherCallDeleteProduct(), watcherPutProduct(), watcherCallPostAdmin(), watcherCallListAdmin(), watcherCallDeleteAdmin(), watcherLoginAdmin(), watcherCallUpdateAdmin(), watcherCallListUser()]);
}
