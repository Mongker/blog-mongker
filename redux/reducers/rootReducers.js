/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 04/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import { combineReducers } from 'redux';
import Counts from './example/updownReducers';
import Catalog from './shopmypham/catalogReducer';
import WindowSize from './shopmypham/windowSizeReducer';
import Product from 'redux/reducers/shopmypham/producReducer';
import Admin from 'redux/reducers/shopmypham/adminReducer';
import User from 'redux/reducers/shopmypham/userReducer';
import Login from 'redux/reducers/shopmypham/loginReducer';

const rootReducer = combineReducers({
    Counts: Counts,
    Catalog: Catalog,
    WindowSize: WindowSize,
    Product: Product,
    Admin: Admin,
    User: User,
    Login: Login,
});
export default rootReducer;
