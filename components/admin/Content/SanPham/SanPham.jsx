/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 17/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import TableSanPham from './TableSanPham/TableSanPham';
import { Button, Modal } from 'antd';
import PropTypes from 'prop-types';

// hooks
import useWindowSize from '../../../hooks/useWindowSize';

// JSX
import ContentModalContainerAdd from './ContentModalAdd/ContentModalContainerAdd';
import ContentModalEditContainer from './ContentModalEdit/ContentModalEditContainer';

// const
const stylesTitle = {color: 'red', textAlign: 'center', fontWeight: 'bold', fontSize: '24px'};
function SanPham(props) {
    const {getList, product, catalog, remove} = props;
    const [productArray, setProductArray] = React.useState([]);

    const [isModalVisibleAdd, setIsModalVisibleAdd] = React.useState(false);
    const [isModalVisibleEdit, setIsModalVisibleEdit] = React.useState(false);
    const [idEdit, setIdEdit] = React.useState('');
    const {width} = useWindowSize();
    const showModal = () => {
        setIsModalVisibleAdd(true);
    };

    const handleOk = () => {
        setIsModalVisibleAdd(false);
        setIsModalVisibleEdit(false);
    };

    const handleCancel = () => {
        setIsModalVisibleAdd(false);
        setIsModalVisibleEdit(false);
    };

    const TitleAdd = (<div style={stylesTitle}>Thêm sản phẩm</div>);
    const TitleEdit = (<div style={stylesTitle}>Sửa sản phẩm</div>);
    const propsAdd = {
        title: TitleAdd,
        visible: isModalVisibleAdd,
        handleOk: handleOk,
        handleCancel: handleCancel,
        wrapClassName: 'modal_sanpham_controller',
        width: width*0.6,
    }
    const propsEdit = {
        title: TitleEdit,
        visible: isModalVisibleEdit,
        handleOk: handleOk,
        handleCancel: handleCancel,
        wrapClassName: 'modal_sanpham_controller',
        width: width*0.6,
        idEdit: idEdit,
        data: (product && product[idEdit]) || '',
    }
    React.useEffect(() => {
        getList()
    }, []);
    React.useEffect(() => {
        const array = Object.values(product);
        setProductArray([...array]);
    }, [product]);

    return(
        <div className={'san-pham'}>
            <TableSanPham data={productArray} setIsModalVisibleEdit={setIsModalVisibleEdit} setIdEdit={setIdEdit} catalog={catalog} remove={remove}/>
            <Button onClick={showModal} style={{borderRadius: '20px', color: 'red',  fontWeight: 'bold', backgroundColor: 'pink', marginLeft: '94%', marginTop: '10px'}}>Thêm</Button>
            <ContentModalContainerAdd {...propsAdd} />
            <ContentModalEditContainer {...propsEdit} />
        </div>
    );
}

SanPham.propTypes = {
    getList: PropTypes.func,
    remove: PropTypes.object,
    product: PropTypes.object,
    catalog: PropTypes.object,
};
SanPham.defaultProps = {
    getList: () => {},
    remove: () => {},
    product: {},
    catalog: {},
};

export default SanPham;
