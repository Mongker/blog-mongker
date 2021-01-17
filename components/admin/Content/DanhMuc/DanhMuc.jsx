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
import { Tree } from 'antd';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import TitleTree from './TitleTree/TitleTree';

function DanhMuc(props) {
    const { getList, catalog } = props;
    const [treeData, setTreeData] = React.useState([]);

    const onSelect = (keys, info) => {
        console.log('Trigger Select', keys, info);
    };

    const onExpand = () => {
        console.log('Trigger Expand');
    };

    // Dữ liệu fake để làm giao diện
    const treeDataFake = [
        {
            title: <TitleTree name={'mỹ phẩm ngoại quốc'} />,
            icon: <div style={{ fontSize: 20 }}>✯</div>,
            key: '0-0',
            children: [
                { title: 'leaf 0-0', key: '0-0-0', icon: <div style={{ fontSize: 20 }}>✯</div>, isLeaf: true },
                { title: 'leaf 0-1', key: '0-0-1', icon: <div style={{ fontSize: 20 }}>✯</div>, isLeaf: true },
            ],
        },
        {
            title: <TitleTree name={'mỹ phẩm ngoại quốc'} />,
            icon: <div style={{ fontSize: 20 }}>✯</div>,
            key: '0-1',
            children: [
                { title: <TitleTree name={'mỹ phẩm ngoại quốc'} />, key: '0-1-0', icon: <div style={{ fontSize: 20 }}>✯</div>, isLeaf: true },
                { title: <TitleTree name={'mỹ phẩm ngoại quốc'} />, key: '0-1-1', icon: <div style={{ fontSize: 20 }}>✯</div>, isLeaf: true },
            ],
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

    React.useEffect(() => {
        getList();
    }, []);
    React.useEffect(() => {
        updateTreeData();
    }, [catalog]);
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
