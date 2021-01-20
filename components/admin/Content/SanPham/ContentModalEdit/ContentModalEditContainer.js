/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 19/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// Redux
import { connect } from 'react-redux';

// components
import ContentModalEdit from './ContentModalEdit';

// util
import typeAction from 'redux/actions/typeAction';

//
const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
    put: (id, data) => dispatch({type: typeAction.SHOP_MY_PHAM.PRODUCT_PUT, payload: {id: id, data:data}})
});

const ContentModalEditContainer = connect(mapStateToProps, mapDispatchToProps)(ContentModalEdit);

export default ContentModalEditContainer;
