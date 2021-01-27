/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 17/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { Button, Modal } from 'antd';
import PropTypes from 'prop-types';


import TableNhanVien from './TableNhanVien/TableNhanVien';
import useWindowSize from '../../../hooks/useWindowSize';
import ContentModal from './ContentModal/ContentModal';
import ContentModalEdit from './ContentModalEdit/ContentModalEdit';

// const
const stylesButton = {borderRadius: '20px', color: 'red',  fontWeight: 'bold', backgroundColor: 'pink', marginLeft: '94%', marginTop: '10px'};
function NhanVien({post, getList, admin, remove, put}) {
    const {width} = useWindowSize();
    const [isModalVisibleAdd, setIsModalVisibleAdd] = React.useState(false);
    const [isModalVisibleEdit, setIsModalVisibleEdit] = React.useState(false);
    const [idEdit, setIdEdit] = React.useState('');

    const showModal = () => {
        setIsModalVisibleAdd(true);
    }

    const handleOk = () => {
        setIsModalVisibleAdd(false);
        setIsModalVisibleEdit(false);
    }

    const handleCancel = () => {
        setIsModalVisibleAdd(false);
        setIsModalVisibleEdit(false);
    };
    // JSX
    const TitleAdd = (<div className={'title_modal'}>Thêm nhân viên</div>);
    const TitleEdit = (<div className={'title_modal'}>Sửa nhân viên</div>);
    const propsAdd = {
        title: TitleAdd,
        visible: isModalVisibleAdd,
        handleOk: handleOk,
        handleCancel: handleCancel,
        post: post,
        wrapClassName: 'modal_controller',
    }
    const propsEdit = {
        title: TitleEdit,
        visible: isModalVisibleEdit,
        handleOk: handleOk,
        handleCancel: handleCancel,
        infoEdit: (admin && idEdit.length > 0) ? admin[idEdit] : {},
        put: put,
        idEdit: idEdit,
        wrapClassName: 'modal_controller',
    }
    React.useEffect(() => {
        getList();
    }, [])
    return(
        <React.Fragment>
            <TableNhanVien admin={admin} remove={remove} setIdEdit={setIdEdit} setIsModalVisibleEdit={setIsModalVisibleEdit} />
            <Button
                onClick={showModal}
                style={stylesButton}
            >
                Thêm
            </Button>
            <ContentModal {...propsAdd} />
            <ContentModalEdit {...propsEdit} />
        </React.Fragment>
    );
}

NhanVien.propTypes = {
    post: PropTypes.func,
};

NhanVien.defaultProps = {
    post: () => {},
};

export default NhanVien;
