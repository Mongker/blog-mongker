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

function TitleTree({ name, showModalAdd }) {
    const { width, height } = useWindowSize();
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
       setIsModalVisible(true);
    };

    const handleCancel = (type='EDIT') => {
       setIsModalVisible(false);
    };
    const handleDelete = () => {
        info('Xóa thành công');
    }
    const info = (content) => {
        message.success(content);
    };
    const onSave = () => {
        info('Lưu thành công');
        handleCancel('ADD')
    };
    // JSX
    const EditModal = (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <div>
                <span style={{ color: 'red' }}>Tên danh mục: </span>
            </div>
            <div>
                <Input defaultValue={name} style={{ width: 200 }} />
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
                <div className={styles.event_item} onClick={() => showModalAdd(true)}>
                    <AppstoreAddOutlined />
                </div>
                <div className={styles.event_item} onClick={showModal}>
                    <EditOutlined />
                </div>
                <div className={styles.event_item} onClick={handleDelete}>
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
