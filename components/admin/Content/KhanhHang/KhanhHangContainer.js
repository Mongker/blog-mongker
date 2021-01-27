/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 21/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// Redux
import { connect } from 'react-redux';

// components
import KhanhHang from './KhanhHang';
import typeAction from 'redux/actions/typeAction';

const mapStateToProps = (state) => {
    const user = state.User;
    console.log('data', user);
    return {
        user
    };
};

const mapDispatchToProps = (dispatch) => ({
    getList: () => {
        debugger; // MongLV
        dispatch({type: typeAction.SHOP_MY_PHAM.USER_CALL_GET})
    },
});

const KhanhHangContainer = connect(mapStateToProps, mapDispatchToProps)(KhanhHang);

export default KhanhHangContainer;
