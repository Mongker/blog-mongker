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
    const { getList, catalog } = props;
    const [treeData, setTreeData] = React.useState([]);
    const [isModalVisible, setIsModalVisible] = React.useState(false);

    const showModal = (type) => {
        setIsModalVisible(true)
    };

    const handleOk = (type) => {
        setIsModalVisible(true)
    };

    const handleCancel = () => {
        setIsModalVisible(false)
    };

    const onSelect = (keys, info) => {
        console.log('Trigger Select', keys, info);
    };

    const onExpand = () => {
        console.log('Trigger Expand');
    };


    // Dữ liệu fake để làm giao diện
    const treeDataFake = [
        {
            title: <TitleTree name={'TRANG ĐIỂM'} showModalAdd={setIsModalVisible} />,
            icon: <div style={{ fontSize: 20 }}>✯</div>,
            key: '0-0',
            children: [
                { title:  <TitleTree name={'TRANG ĐIỂM MẶT'} showModalAdd={setIsModalVisible} />, key: '0-0-0', icon: <div style={{ fontSize: 20 }}>✯</div>, isLeaf: true },
                { title:  <TitleTree name={'TRANG ĐIỂM MÔI'} showModalAdd={setIsModalVisible} />, key: '0-0-1', icon: <div style={{ fontSize: 20 }}>✯</div>, isLeaf: true },
                { title:  <TitleTree name={'TRANG ĐIỂM MẮT '} showModalAdd={setIsModalVisible} />, key: '0-0-2', icon: <div style={{ fontSize: 20 }}>✯</div>, isLeaf: true },
                { title:  <TitleTree name={'CỌ TRANG ĐIỂM '} showModalAdd={setIsModalVisible} />, key: '0-0-4', icon: <div style={{ fontSize: 20 }}>✯</div>, isLeaf: true },
            ],
        },
        {
            title: <TitleTree name={'CHĂM SÓC DA'} showModalAdd={setIsModalVisible} />,
            icon: <div style={{ fontSize: 20 }}>✯</div>,
            key: '1-0',
            children: [
                { title: <TitleTree name={'LÀM SẠCH DA'} showModalAdd={setIsModalVisible} />, key: '1-1-0', icon: <div style={{ fontSize: 20 }}>✯</div>, isLeaf: true },
                { title: <TitleTree name={'MÁY RỬA MẶT'} showModalAdd={setIsModalVisible} />, key: '1-1-1', icon: <div style={{ fontSize: 20 }}>✯</div>, isLeaf: true },
                { title: <TitleTree name={'TRỊ MỤN'} showModalAdd={setIsModalVisible} />, key: '1-1-2', icon: <div style={{ fontSize: 20 }}>✯</div>, isLeaf: true },
            ],
        },
        {
            title: <TitleTree name={'NƯỚC HOA'} showModalAdd={setIsModalVisible} />,
            icon: <div style={{ fontSize: 20 }}>✯</div>,
            key: '2-0',
            children: [
                { title: <TitleTree name={'NƯỚC HOA NỮ'} showModalAdd={setIsModalVisible} />, key: '2-1-0', icon: <div style={{ fontSize: 20 }}>✯</div>, isLeaf: true },
                { title: <TitleTree name={'NƯỚC HOA NAM'} showModalAdd={setIsModalVisible} />, key: '2-1-1', icon: <div style={{ fontSize: 20 }}>✯</div>, isLeaf: true },
                { title: <TitleTree name={'XỊT THƠM BODY'} showModalAdd={setIsModalVisible} />, key: '2-1-2', icon: <div style={{ fontSize: 20 }}>✯</div>, isLeaf: true },
            ],
        },
        {
            title: <TitleTree name={'CHĂM SÓC TÓC'} showModalAdd={setIsModalVisible} />,
            icon: <div style={{ fontSize: 20 }}>✯</div>,
            key: '3-0',
            children: [],
        },
        {
            title: <TitleTree name={'PHỤ KIỆN TRANG ĐIỂM'} showModalAdd={setIsModalVisible} />,
            icon: <div style={{ fontSize: 20 }}>✯</div>,
            key: '4-0',
            children: [],
        },
    ];

    const setChildren = (arrayObj, id, key) => {
        const children = [];
        let dem = 0;
        arrayObj.map((itemChildren) => {
            if (itemChildren.paramId === id) {
                const _key = `${key}-${dem}`;
                children.push({
                    title: <TitleTree name={itemChildren.name} />,
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
                    title: <TitleTree name={item.name} />,
                    key: `${dem}`,
                    icon: <div style={{ fontSize: 20 }}>✯</div>,
                    children: setChildren(arrayObj, item._id, `${dem}`),
                });
                dem = dem + 1;
            }
        });
        setTreeData(newTreeData);
    };

    const info = (content) => {
        message.success(content);
    };

    const onAdd = () => {
        info('Thêm thành công');
        handleCancel()
    }

    React.useEffect(() => {
        getList();
    }, []);
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
                <Input style={{ width: 200 }} />
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
                treeData={treeDataFake} // Dùng tạm để dụng giao diện
                // treeData={treeData}
            />
            <div style={{fontSize: 25, color: 'red'}} onClick={()=> setIsModalVisible(true)}><PlusCircleOutlined style={{cursor: 'pointer'}} /></div>
            <Modal title={AddModal} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} closeIcon={false} wrapClassName={'tree_controller_modal_edit'} />
        </div>
    );
}
DanhMuc.propTypes = {
    getList: PropTypes.func,
    catalog: PropTypes.object,
};

DanhMuc.defaultProps = {
    getList: () => {},
    catalog: {},
};

export default DanhMuc;
