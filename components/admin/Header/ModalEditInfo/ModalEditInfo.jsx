/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 21/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { Input, message, Modal, Select } from 'antd';
import styles from './styles/index.module.css';
import UploadImg from '../../Content/NhanVien/Upload/UploadImg';
import { URL_API } from 'redux/api/config';
// import PropTypes from 'prop-types';

function ModalEditInfo({ setVisible, visible, getList, admin, put }) {
    const [listImg, setListImg] = React.useState([]); // Mảng các ảnh
    const [fileList, setFileList] = React.useState([]); // Mảng các file ảnh
    const [nameState, setNameState] = React.useState('');
    const [phoneState, setPhoneState] = React.useState('');
    const [passOldState, setPassOldState] = React.useState('');
    const [passNewState, setPassNewState] = React.useState('');
    const [passCheckState, setPassCheckState] = React.useState('');
    const [infoUser, setInfoUser] = React.useState({});

    const resetData = () => {
        setFileList([]);
        setListImg([]);
        setPhoneState('');
        setNameState('');
        setPassOldState('');
        setPassNewState('');
        setPassCheckState('');
    };

    const handleOk = () => {
        const data = {
            name: nameState,
            phone: phoneState,
            avatar: listImg[0],
        };
        if (passOldState === localStorage.getItem('token_admin') && passOldState.length > 0) {
            if (passNewState === passCheckState && passCheckState.length > 0 && passNewState.length > 0) {
                data.password = passNewState;
                console.log('data', data);
            } else {
                message.warn('Mật khẩu không khới nhau');
            }
            put(infoUser._id, data);
            setVisible(false);
        } else if (passOldState.length === 0) {
            put(infoUser._id, data);
            setVisible(false);
        } else {
            message.warn('Mật khẩu hiễn tại của bạn không đúng');
        }
        location.reload();
    };

    const handleCancel = () => {
        setVisible(false);
        resetData();
    };

    const createListFile = () => {
        let array = [];
        if (infoUser.avatar) {
            [infoUser.avatar].map((item) => {
                array.push({
                    uid: '-1',
                    name: 'image.png',
                    status: 'done',
                    url: `${URL_API.img}${item}`,
                });
            });
        }
        return array;
    };

    React.useEffect(() => {
        getList();
    }, []);

    React.useEffect(() => {
        const newListFile = createListFile();
        setNameState(infoUser.name);
        setPhoneState(infoUser.phone);
        setListImg([infoUser.avatar]);
        setFileList(newListFile);
    }, [visible]);

    React.useEffect(() => {
        if (Object.keys(infoUser).length === 0) {
            const id = localStorage && localStorage.getItem('id_admin') ? localStorage.getItem('id_admin') : '';
            const info = admin[id] ? admin[id] : {};
            setInfoUser(info);
        }
    });

    return (
        <Modal title='Thay đổi thông tin' visible={visible} onOk={handleOk} onCancel={handleCancel} wrapClassName={'modal_controller'}>
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
                    <div className={styles.content_title_item_modal}>Số điện thoại *</div>
                    <div className={styles.content_value_item_modal}>
                        <Input value={phoneState} onChange={(e) => setPhoneState(e.target.value)} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Mật khẩu cũ:</div>
                    <div className={styles.content_value_item_modal}>
                        <Input.Password value={passOldState} onChange={(e) => setPassOldState(e.target.value)} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Mật khẩu mới:</div>
                    <div className={styles.content_value_item_modal}>
                        <Input.Password value={passNewState} onChange={(e) => setPassNewState(e.target.value)} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Nhập lại mật khẩu:</div>
                    <div className={styles.content_value_item_modal}>
                        <Input.Password value={passCheckState} onChange={(e) => setPassCheckState(e.target.value)} />
                    </div>
                </div>
            </div>
        </Modal>
    );
}

ModalEditInfo.propTypes = {};

ModalEditInfo.defaultProps = {};

export default ModalEditInfo;
