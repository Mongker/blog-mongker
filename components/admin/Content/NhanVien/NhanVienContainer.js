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

// components
import NhanVien from './NhanVien';
import typeAction from 'redux/actions/typeAction';

const mapStateToProps = (state) => {
    const admin = state.Admin;
    return {
        admin,
    };
};

const mapDispatchToProps = (dispatch) => ({
    post: (data) => dispatch({
        type: typeAction.SHOP_MY_PHAM.ADMIN_POST, payload: {data: data}
    }),
    getList: ()=> dispatch({ type: typeAction.SHOP_MY_PHAM.ADMIN_CALL_GET}),
    remove: (id) => dispatch({type: typeAction.SHOP_MY_PHAM.ADMIN_DELETE, payload: {id: id}}),
    put: (id, data) => {
        dispatch({type: typeAction.SHOP_MY_PHAM.ADMIN_PUT, payload: {id: id, data: data}});
    }
});

const NhanVienContainer = connect(mapStateToProps, mapDispatchToProps)(NhanVien);

export default NhanVienContainer;
