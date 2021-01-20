/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 14/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Input, message, Button } from 'antd';
import { EditOutlined, AppstoreAddOutlined, DeleteOutlined } from '@ant-design/icons';

// Hooks
import useWindowSize from '../../../../hooks/useWindowSize';

import styles from './styles/index.module.css';

function TitleTree({ name = '', showModalAdd, id, onDelete, onEdit }) {
    const { width } = useWindowSize();
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [textEdit, setTextEdit] = React.useState(name);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
       setIsModalVisible(true);
    };

    const handleCancel = (type='EDIT') => {
       setIsModalVisible(false);
    };
    const handlePressEnter = (e) => {
        onSave(e.target.value);
    };
    const onSave = (_textEdit = textEdit) => {
        const data = {
            name: _textEdit,
        }
        onEdit(id, data);
        setTextEdit('');
        setIsModalVisible(false);
    };
    const handleChange = (e) => {
        setTextEdit(e.target.value);
    }
    // JSX
    const EditModal = (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <div>
                <span style={{ color: 'red' }}>Tên danh mục: </span>
            </div>
            <div>
                <Input defaultValue={name} onChange={handleChange} onPressEnter={handlePressEnter} style={{ width: 200 }} />
            </div>
            <div>
                <Button type='primary' onClick={() => onSave()} style={{ marginLeft: '5px', borderRadius: '20px' }}>
                    Lưu
                </Button>
            </div>
        </div>
    );

    return (
        <div style={{ width: width * 0.5 }} className={`${styles.controller}`}>
            <div>{name}</div>
            <div style={{ fontSize: '25px' }} className={styles.event}>
                <div className={styles.event_item} onClick={() => showModalAdd(id)}>
                    <AppstoreAddOutlined />
                </div>
                <div className={styles.event_item} onClick={showModal}>
                    <EditOutlined />
                </div>
                <div className={styles.event_item} onClick={() => onDelete(id)}>
                    <DeleteOutlined />
                </div>
            </div>
            <Modal title={EditModal} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} closeIcon={false} wrapClassName={'tree_controller_modal_edit'} />
        </div>
    );
}

TitleTree.propTypes = {
    name: PropTypes.string,
};

TitleTree.defaultProps = {
    name: '[Error Server]',
};

export default TitleTree;
