/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 20/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// Redux
import { connect } from 'react-redux';
import typeAction from 'redux/actions/typeAction';

// components
import Login from './Login';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    login: (data) => dispatch({type: typeAction.SHOP_MY_PHAM.ADMIN_LOGIN, payload: {data: data}})
});

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
