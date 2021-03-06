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
import { EditOutlined, CloseOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Image } from 'antd';

// util
import useWindowSize from '../../../../hooks/useWindowSize';
import { URL_API } from 'redux/api/config';

// styles
import styles from '../../SanPham/styles/index.module.css';

// const
const styleName = { color: 'red', fontWeight: 'bold' };
function TableNhanVien({ admin = {}, remove, setIdEdit, setIsModalVisibleEdit }) {
    const [data, setData] = React.useState([]);
    const [id, setId] =React.useState('');
    const [position, setPosition] =React.useState('');
    const { width } = useWindowSize();

    const onDelete = (id) => {
        remove(id);
    };

    const showModal = (id) => {
        setIdEdit(id);
        setIsModalVisibleEdit(true);
    }
    React.useEffect(() => {
        setData(Object.values(admin));
    }, [admin]);
    React.useEffect(() => {
        const _id = localStorage && localStorage.getItem('id_admin') ? localStorage.getItem('id_admin') : '';
        const _position = localStorage && localStorage.getItem('position_admin') ? localStorage.getItem('position_admin') : '';
        setId(_id);
        setPosition(_position);
    }, []);
    const check = localStorage.getItem('position_admin') === 'Quản trị viên' ? true : false;
    return (
        <div className={styles.controller}>
            <div className={`${styles.item} ${styles.item_item}`} style={{ width: width * 0.8 }}>
                <div style={{ width: 50, ...styleName }}>Avatar</div>
                <div style={{ width: 200, ...styleName }}>
                    <span>Họ tên </span>
                </div>
                <div style={{ width: 80, ...styleName }}>Số ĐT</div>
                <div style={{ width: 100, ...styleName }}>Email</div>
                <div style={{ width: 100, ...styleName }}>Chức vụ</div>
                <div style={{ width: 75, ...styleName }}>Hành động</div>
            </div>
            {/*http://liulostore.com/content/images/thumbs/0006820_son-kem-black-rouge-air-fit-velvet-tint_550.jpeg*/}
            {data.map((item, index) => (
                <div className={`${styles.item_sanpham}`} style={data.length === index + 1 ? { borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px', width: width * 0.8 } : { width: width * 0.8 }}>
                    <div className={'img_nhan_vien'} style={{ width: 50, height: 50 }}>
                        <Image src={`${URL_API.img}${item.avatar}`} width={48} heigh={48} />
                    </div>
                    <div style={{ width: 200, fontWeight: 'bold' }}>{item.name}</div>
                    <div style={{ width: 80 }}>{item.phone}</div>
                    <div style={{ width: 100 }}>{item.email}</div>
                    <div style={{ width: 100 }}>{item.position}</div>
                    <div style={{ width: 75, display: 'flex', justifyContent: 'space-around' }}>
                        <EditOutlined style={{ color: '#8285d2', cursor: 'pointer' }} onClick={() => showModal(item._id)}/>
                        {
                            check && ((item.position !=='Quản trị viên') ? (<DeleteOutlined style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(item._id)} />
                            ) : (''))
                        }
                    </div>
                </div>
            ))}
        </div>
    );
}

TableNhanVien.propTypes = {};

TableNhanVien.defaultProps = {};

export default TableNhanVien;
