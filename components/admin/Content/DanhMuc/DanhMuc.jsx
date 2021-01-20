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
import { Button, Input, message, Modal, Tree } from 'antd';
import { DownOutlined, PlusCircleOutlined } from '@ant-design/icons';
import TitleTree from './TitleTree/TitleTree';

function DanhMuc(props) {
    const { getList, catalog, post, remove, put } = props;
    const [treeData, setTreeData] = React.useState([]);
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [text, setText] = React.useState('');
    const [idRoot, setIdRoot] = React.useState('-1');

    const showModal = (id) => {
        setIdRoot(id);
        setIsModalVisible(true);
    };

    const handleOk = (type) => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const onSelect = (keys, info) => {
        console.log('Trigger Select', keys, info);
    };

    const onDelete = (id) => {
        remove(id);
    }

    const onAdd = (_text = text, _idRoot = idRoot) => {
        const data = {
            name: _text,
            paramId: _idRoot,
        };
        post(data);
        handleCancel(); // Đóng Modal
        setText(''); // reset text về rỗng
        setIdRoot('-1');
    };

    const handleText = (e) => {
        setText(e.target.value);
    };

    const handlePressEnter = (e) => {
        onAdd(e.target.value, idRoot);
    }

    const setChildren = (arrayObj, id, key) => {
        const children = [];
        let dem = 0;
        arrayObj.map((itemChildren) => {
            if (itemChildren.paramId === id) {
                const _key = `${key}-${dem}`;
                children.push({
                    title: <TitleTree name={itemChildren.name} showModalAdd={showModal} id={itemChildren._id} onDelete={onDelete} onEdit={put} />,
                    key: _key,
                    icon: <div style={{ fontSize: 20 }}>✯</div>,
                    children: setChildren(arrayObj, itemChildren._id, _key.toString()),
                });
                dem = dem + 1;
            }
        });
        return children;
    };
    const updateTreeData = () => {
        let newTreeData = [];
        const arrayObj = Object.values(catalog);
        let dem = 0;
        arrayObj.map((item, i) => {
            if (item.paramId === '-1') {
                newTreeData.push({
                    title: <TitleTree name={item.name} showModalAdd={showModal} id={item._id} onDelete={onDelete} onEdit={put} />,
                    key: `${dem}`,
                    icon: <div style={{ fontSize: 20 }}>✯</div>,
                    children: setChildren(arrayObj, item._id, `${dem}`),
                });
                dem = dem + 1;
            }
        });
        setTreeData(newTreeData);
    };

    React.useEffect(() => {
        updateTreeData();
    }, [catalog]);

    // JSX
    const AddModal = (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center' }}>
            <div>
                <span style={{ color: 'red' }}>Tên danh mục: </span>
            </div>
            <div>
                <Input style={{ width: 200 }} value={text} onChange={handleText} onPressEnter={handlePressEnter} />
            </div>
            <div>
                <Button type='primary' onClick={() => onAdd()} style={{ marginLeft: '5px', borderRadius: '20px' }}>
                    Thêm
                </Button>
            </div>
        </div>
    );

    return (
        <div className={'tree_controller'}>
            <Tree
                // showLine
                showIcon
                switcherIcon={<DownOutlined />}
                defaultExpandedKeys={['0-0-0']}
                onSelect={onSelect}
                treeData={treeData}
                // treeData={treeDataFake} // Dùng tạm để dụng giao diện
            />
            <div style={{ fontSize: 25, color: 'red' }} onClick={() => setIsModalVisible(true)}>
                <PlusCircleOutlined style={{ cursor: 'pointer' }} />
            </div>
            <Modal title={AddModal} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} closeIcon={false} wrapClassName={'tree_controller_modal_edit'} />
        </div>
    );
}
DanhMuc.propTypes = {
    getList: PropTypes.func,
    post: PropTypes.func,
    remove: PropTypes.func,
    put: PropTypes.func,
    catalog: PropTypes.object,
};

DanhMuc.defaultProps = {
    getList: () => {},
    post: () => {},
    remove: () => {},
    put: () => {},
    catalog: {},
};

export default DanhMuc;
