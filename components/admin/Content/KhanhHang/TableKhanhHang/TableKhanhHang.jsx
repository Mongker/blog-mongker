/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 17/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { ContainerOutlined, CloseOutlined, EditOutlined, DeleteOutlined, MenuOutlined } from '@ant-design/icons';
// styles
import styles from '../../SanPham/styles/index.module.css';
import useWindowSize from '../../../../hooks/useWindowSize';

// const
const styleName = { color: 'red', fontWeight: 'bold' };
function TableKhanhHang({ data = [] }) {
    const { width } = useWindowSize();
    return (
        <div className={styles.controller}>
            <div className={`${styles.item} ${styles.item_item}`} style={{ width: width * 0.8 }}>
                <div style={{ width: 200, ...styleName }}>
                    <span>Tên khách hàng</span>
                </div>
                <div style={{ width: 80, ...styleName }}>Số ĐT</div>
                <div style={{ width: 100, ...styleName }}>Email</div>
                <div style={{ width: 200, ...styleName }}>Địa Chỉ</div>
                <div style={{ width: 75, ...styleName }}>Hành động</div>
            </div>
            {/*http://liulostore.com/content/images/thumbs/0006820_son-kem-black-rouge-air-fit-velvet-tint_550.jpeg*/}
            {data.map((item, index) => (
                <div className={`${styles.item_sanpham}`} style={data.length === index + 1 ? { borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', width: width * 0.8 } : { width: width * 0.8 }}>
                    <div style={{ width: 200, fontWeight: 'bold' }}>{item.name}</div>
                    <div style={{ width: 80 }}>{item.phone}</div>
                    <div style={{ width: 100 }}>{item.email}</div>
                    <div style={{ width: 200 }}>{item.address}</div>
                    <div style = {{width: 75, display: 'flex', justifyContent: 'space-around'}}>
                        <MenuOutlined style={{color: '#8285d2', cursor: 'pointer'}}/>
                        {/*<MenuOutlined />*/}
                        {/*<DeleteOutlined style={{color: 'red', cursor: 'pointer'}}/>*/}
                    </div>
                </div>
            ))}
        </div>
    );
}

TableKhanhHang.propTypes = {};

TableKhanhHang.defaultProps = {};

export default TableKhanhHang;
