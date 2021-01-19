/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 17/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import TableNhanVien from './TableNhanVien/TableNhanVien';
import { Button } from 'antd';
// import PropTypes from 'prop-types';

function NhanVien() {
    const data = [
        {
            name: 'Vương Văn Ninh',
            phone: '0123456788',
            email: 'NinhVV1@gmail.com',
            chuc_vu: 'Nhân viên',
        },
        {
            name: 'Đào Văn Thắng',
            phone: '0394111111',
            email: 'NoNe@gmail.com',
            chuc_vu: 'Nhân viên',
        },
        {
            name: 'Nguyễn Thị Ánh',
            phone: '0999999999',
            email: 'AnhNN@gmail.com',
            chuc_vu: 'Nhân viên',
        },
        {
            name: 'Đào Thị Thanh Mai',
            phone: '0394966969',
            email: 'DTTMai@gmail.com',
            chuc_vu: 'Quản lý',
        },
        {
            name: 'Trần Văn Cao',
            phone: '0388888999',
            email: 'Caogia@gmail.com',
            chuc_vu: 'Nhân viên',
        },
        {
            name: 'Lưu Thị Ngát',
            phone: '0999999998',
            email: 'NgatThi12@gmail.com',
            chuc_vu: 'Nhân viên',
        },
    ]
    return(
        <React.Fragment>
            <TableNhanVien data={data} />
            <Button style={{borderRadius: '20px', color: 'red',  fontWeight: 'bold', backgroundColor: 'pink', marginLeft: '94%', marginTop: '10px'}}>Thêm</Button>
        </React.Fragment>
    );
}

NhanVien.propTypes = {};

NhanVien.defaultProps = {};

export default NhanVien;
