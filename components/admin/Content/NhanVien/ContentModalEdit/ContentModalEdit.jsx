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
import { Button, Input, message, Modal, Select } from 'antd';
import UploadImg from '../Upload/UploadImg';
import { URL_API } from 'redux/api/config';

// const
const { Option } = Select;

function ContentModalEdit(props) {
    const { put, handleCancel, handleOk, infoEdit, visible } = props;
    const [listImg, setListImg] = React.useState([]); // Mảng các ảnh
    const [fileList, setFileList] = React.useState([]); // Mảng các file ảnh
    const [nameState, setNameState] = React.useState('')
    const [emailState, setEmailState] = React.useState('')
    const [phoneState, setPhoneState] = React.useState('')
    const [positionState, setPositionState] = React.useState('')
    const [passwordState, setPassWordState] = React.useState('')
    const [infoState, setInfoState] = React.useState('')
    const onChangText = (e, type) => {
        data[type] = e.target.value;
    };
    const handleChange = (value) => {
        console.log('value', value);
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
        setPassWordState('');
    };
    const validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    const onOk = () => {
        if((nameState.length > 0) && (emailState.length > 0) && (phoneState.length > 0) && (positionState.length > 0) && (infoState.length>0) && (listImg[0])) {
            const data = {
                name: nameState || '',
                email: emailState || '',
                phone: phoneState || '',
                position: positionState || '',
                info: infoState || '',
                avatar: listImg[0] ? listImg[0] : '',
            };
            (passwordState.length > 0) && (data.password = passwordState);
            console.log('data', data);
            put(infoEdit._id, data);
            resetData();
            handleOk();
        } else {
            message.error('Không được để trống bất cứ thông tin * nào');
        }
    };
    const onCancel = () => {
        resetData();
        handleCancel();
    };

    const createListFile = () => {
        let array = [];
        if(infoEdit.avatar) {
            [infoEdit.avatar].map((item) => {
                array.push({
                    uid: '-1',
                    name: 'image.png',
                    status: 'done',
                    url: `${URL_API.img}${item}`,
                })
            });
        }
        return array;
    }

    const onResetPassWord = () => {
        setPassWordState('123456');
        message.info('Mật khẩu đã được reset về: 123456')
    };

    React.useEffect(() => {
        const newListFile = createListFile();
        setListImg([infoEdit.avatar]);
        setFileList(newListFile);
        setInfoState(infoEdit.info);
        setPhoneState(infoEdit.phone);
        setEmailState(infoEdit.email);
        setNameState(infoEdit.name);
        setPositionState(infoEdit.position);
    }, [visible])
    const check = (localStorage.getItem('position_admin') !== 'Quản trị viên') ? true : false;
    return (
        <Modal onOk={onOk} onCancel={onCancel} {...props}>
            <div className={styles.controller}>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Ảnh đại diện *:</div>
                    <div className={styles.content_value_item_modal}>
                        <UploadImg listImg={listImg} setListImg={setListImg} fileList={fileList} setFileList={setFileList} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Họ tên *:</div>
                    <div className={styles.content_value_item_modal}>
                        <Input value={nameState} onChange={(e) => setNameState(e.target.value)} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Email *:</div>
                    <div className={styles.content_value_item_modal}>
                        <Input value={emailState} disabled onChange={(e) => setEmailState(e.target.value)} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Số điện thoại *</div>
                    <div className={styles.content_value_item_modal}>
                        <Input value={phoneState} onChange={(e) => setPhoneState(e.target.value)} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Địa chỉ *:</div>
                    <div className={styles.content_value_item_modal}>
                        <Input.TextArea value={infoState} onChange={(e) => setInfoState(e.target.value)} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Mật khẩu:</div>
                    <div className={styles.content_value_item_modal}>
                        <Button type="primary" onClick={onResetPassWord}>Reset</Button>
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Chức vụ *:</div>
                    <div className={styles.content_value_item_modal}>
                        <Select disabled={check} defaultValue='-----Chọn chức vụ ------' value={positionState} style={{ width: '50%' }} onChange={handleChange}>
                            <Option value='Quản trị viên'>Quản trị viên</Option>
                            <Option value='Nhân viên'>Nhân viên</Option>
                            <Option value='Người giao hàng'>Người giao hàng</Option>
                        </Select>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

ContentModalEdit.propTypes = {};

ContentModalEdit.defaultProps = {};

export default ContentModalEdit;
