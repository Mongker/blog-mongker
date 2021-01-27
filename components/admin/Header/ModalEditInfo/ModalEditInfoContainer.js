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
import ModalEditInfo from './ModalEditInfo';
import typeAction from 'redux/actions/typeAction';

const mapStateToProps = (state) => {
    const admin = state.Admin;
    return {
        admin
    }
};

const mapDispatchToProps = (dispatch) => ({
    getList: () => dispatch({type: typeAction.SHOP_MY_PHAM.ADMIN_CALL_GET}),
    put: (id, data) => {
        debugger; // MongLV
        dispatch({type: typeAction.SHOP_MY_PHAM.ADMIN_PUT, payload: {data: data, id: id}});
    }
});

const ModalEditInfoContainer = connect(mapStateToProps, mapDispatchToProps)(ModalEditInfo);

export default ModalEditInfoContainer;
