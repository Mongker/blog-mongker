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
// import { getList } from 'redux/actions/shopmypham/catalogAction';

// components
import DanhMuc from './DanhMuc';
import typeAction from 'redux/actions/typeAction';

const mapStateToProps = (store) => {
    const catalog = store.Catalog;
    return {
        catalog,
    };
};

const mapDispatchToProps = (dispatch) => ({
    post: (data) => dispatch({type: typeAction.SHOP_MY_PHAM.CATALOG_POST , payload: {data: data}}),
    remove: (id) => dispatch({type: typeAction.SHOP_MY_PHAM.CATALOG_DELETE , payload: {id: id}}),
    put: (id, data) => dispatch({type: typeAction.SHOP_MY_PHAM.CATALOG_PUT , payload: {id: id, data: data}}),
});

const DanhMucContainer = connect(mapStateToProps, mapDispatchToProps)(DanhMuc);

export default DanhMucContainer;
