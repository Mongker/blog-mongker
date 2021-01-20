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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    post: (data) => dispatch({
        type: typeAction.SHOP_MY_PHAM.ADMIN_POST, payload: {data: data}
    }),
});

const NhanVienContainer = connect(mapStateToProps, mapDispatchToProps)(NhanVien);

export default NhanVienContainer;
