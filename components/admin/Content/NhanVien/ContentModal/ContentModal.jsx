/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 20/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
// import PropTypes from 'prop-types';

// styles
import styles from './styles/index.module.css';
import { Input, Modal, Select } from 'antd';
import UploadImg from '../Upload/UploadImg';

// const
const { Option } = Select;

function ContentModal(props) {
    const { post, handleCancel, handleOk } = props;
    const [listImg, setListImg] = React.useState([]); // Mảng các ảnh
    const [fileList, setFileList] = React.useState([]); // Mảng các file ảnh
    const [nameState, setNameState] = React.useState('')
    const [emailState, setEmailState] = React.useState('')
    const [phoneState, setPhoneState] = React.useState('')
    const [positionState, setPositionState] = React.useState('')
    const [infoState, setInfoState] = React.useState('')
    const onChangText = (e, type) => {
        data[type] = e.target.value;
    };
    const handleChange = (value) => {
        setPositionState(value);
    };
    const resetData = () => {
        setFileList([]);
        setListImg([]);
        setInfoState('');
        setPhoneState('');
        setEmailState('');
        setNameState('');
        setPositionState('');

    };
    const onOk = () => {
        const data = {
            name: nameState || '',
            email: emailState || '',
            phone: phoneState || '',
            password: 'admin@utt.com',
            position: positionState || '',
            info: infoState || '',
            avatar: listImg[0] ? listImg[0] : '',
        }
        post(data);
        resetData();
        handleOk();
        console.log('data', data);
    };
    const onCancel = () => {
        resetData();
        handleCancel();
    };

    return (
        <Modal onOk={onOk} onCancel={onCancel} {...props}>
            <div className={styles.controller}>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Ảnh đại diện:</div>
                    <div className={styles.content_value_item_modal}>
                        <UploadImg listImg={listImg} setListImg={setListImg} fileList={fileList} setFileList={setFileList} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Họ tên:</div>
                    <div className={styles.content_value_item_modal}>
                        <Input value={nameState} onChange={(e) => setNameState(e.target.value)} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Email:</div>
                    <div className={styles.content_value_item_modal}>
                        <Input value={emailState} onChange={(e) => setEmailState(e.target.value)} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Số điện thoại</div>
                    <div className={styles.content_value_item_modal}>
                        <Input value={phoneState} onChange={(e) => setPhoneState(e.target.value)} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Địa chỉ:</div>
                    <div className={styles.content_value_item_modal}>
                        <Input.TextArea value={infoState} onChange={(e) => setInfoState(e.target.value)} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Mật khẩu:</div>
                    <div className={styles.content_value_item_modal}>
                        <Input value={'admin@utt.com'} disabled onChange={(e) => onChangText(e, 'password')} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Chức vụ:</div>
                    <div className={styles.content_value_item_modal}>
                        <Select value='-----Chọn chức vụ ------' style={{ width: '50%' }} onChange={handleChange}>
                            <Option value='admin'>Quản trị viên</Option>
                            <Option value='staff'>Nhân viên</Option>
                            <Option value='delivery'>Người giao hàng</Option>
                        </Select>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

ContentModal.propTypes = {};

ContentModal.defaultProps = {};

export default ContentModal;
