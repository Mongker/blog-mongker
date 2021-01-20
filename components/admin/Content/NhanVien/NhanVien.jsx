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

// const
const stylesButton = {borderRadius: '20px', color: 'red',  fontWeight: 'bold', backgroundColor: 'pink', marginLeft: '94%', marginTop: '10px'};
function NhanVien({post}) {
    const {width} = useWindowSize();
    const [isModalVisibleAdd, setIsModalVisibleAdd] = React.useState(false);

    const showModal = () => {
        setIsModalVisibleAdd(true);
    }

    const handleOk = () => {
        setIsModalVisibleAdd(false);
    }

    const handleCancel = () => {
        setIsModalVisibleAdd(false);
    };
    // JSX
    const TitleAdd = (<div className={'title_modal'}>Thêm nhân viên</div>);
    const propsAdd = {
        title: TitleAdd,
        visible: isModalVisibleAdd,
        handleOk: handleOk,
        handleCancel: handleCancel,
        post: post,
        wrapClassName: 'modal_controller',
    }
    return(
        <React.Fragment>
            <TableNhanVien />
            <Button
                onClick={showModal}
                style={stylesButton}
            >
                Thêm
            </Button>
            <ContentModal {...propsAdd} />
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
