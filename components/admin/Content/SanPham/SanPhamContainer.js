/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 17/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// Redux
import { connect } from 'react-redux';

// components
import SanPham from './SanPham';
import typeAction from 'redux/actions/typeAction';

const mapStateToProps = (state) => {
    const product = state.Product;
    const catalog = state.Catalog;
    return {
        product,
        catalog,
    }
};

const mapDispatchToProps = (dispatch) => ({
    remove: (id) => {
        debugger; // MongLV
        dispatch({type: typeAction.SHOP_MY_PHAM.PRODUCT_DELETE, payload: {id: id}})
    },
});

const SanPhamContainer = connect(mapStateToProps, mapDispatchToProps)(SanPham);

export default SanPhamContainer;
