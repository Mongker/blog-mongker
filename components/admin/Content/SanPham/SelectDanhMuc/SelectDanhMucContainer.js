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
import SelectDanhMuc from './index';

// Util
import typeAction from 'redux/actions/typeAction';

const mapStateToProps = (store) => {
    const catalog = store.Catalog;
    return {
        catalog,
    }
};

const mapDispatchToProps = (dispatch) => ({
    getList: () => dispatch({type: typeAction.SHOP_MY_PHAM.CALL_GET_LIST_CATALOG , payload: {}}),
});

const SelectDanhMucContainer = connect(mapStateToProps, mapDispatchToProps)(SelectDanhMuc);

export default SelectDanhMucContainer;
