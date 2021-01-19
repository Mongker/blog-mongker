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
import { EditOutlined, DeleteOutlined} from '@ant-design/icons';
// styles
import styles from '../styles/index.module.css';

// const
const styleName = {color: 'red', fontWeight: 'bold'};
function TableSanPham({data}) {
    return (
        <div className={styles.controller}>
            <div className={`${styles.item} ${styles.item_item}`}>
                <div style={{ width: 435, ...styleName}}>
                    <span>Tên sản phẩm</span>
                </div>
                <div style={{width: 60, ...styleName}}>Số lượng</div>
                <div style={{width: 120, ...styleName}}>Danh mục</div>
                <div style={{width: 100, ...styleName}}>Giá</div>
                <div style={{width: 75, ...styleName}}>Hành động</div>
            </div>
            {/*http://liulostore.com/content/images/thumbs/0006820_son-kem-black-rouge-air-fit-velvet-tint_550.jpeg*/}
            {data.map((item, index) => (
                <div className={`${styles.item_sanpham}`} style={data.length === index + 1 ? { borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', marginTop: '2px' } : {marginTop: '2px'}}>
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', width: 435, height: '52px' }}>
                        <img src={item.src} alt='sản phẩm' width={50} height={50} style={{ borderRadius: '5px' }} />
                        <div className={`${styles.sanpham}`}>
                            <div style={{ color: 'black', fontSize: 18, fontWeight: '400', fontFamily: 'fangsong' }}>{item.name}</div>
                            <span>
                                View: {item.view} | Đã bán :{item.daban}
                            </span>
                        </div>
                    </div>
                    <div style={{width: 60}}>{item.soluong}</div>
                    <div style={{width: 120}}>{item.danhmuc}</div>
                    <div style={{width: 100}}>{item.gia_tien}</div>
                    <div style = {{width: 75, display: 'flex', justifyContent: 'space-around'}}>
                        <EditOutlined style={{color: '#8285d2', cursor: 'pointer'}}/>
                        <DeleteOutlined style={{color: 'red', cursor: 'pointer'}}/>
                    </div>
                </div>
            ))}
        </div>
    );
}

TableSanPham.propTypes = {};

TableSanPham.defaultProps = {};

export default TableSanPham;
