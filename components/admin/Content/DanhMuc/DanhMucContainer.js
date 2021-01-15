/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 14/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// Redux
import { connect } from 'react-redux';

// action
import { getList } from 'redux/actions/shopmypham/catalogAction';

// components
import DanhMuc from './DanhMuc';
import typeAction from 'redux/actions/typeAction';

const mapStateToProps = (store) => {
    console.log('store: ', store);
    const catalog = store.Catalog;
    return {
        catalog,
    };
};

const mapDispatchToProps = (dispatch) => ({
    getList: () => {
        debugger; // MongLV
        return dispatch({type: typeAction.SHOP_MY_PHAM.CALL_GET_LIST_CATALOG , payload: {}});
    },
});

const DanhMucContainer = connect(mapStateToProps, mapDispatchToProps)(DanhMuc);

export default DanhMucContainer;
