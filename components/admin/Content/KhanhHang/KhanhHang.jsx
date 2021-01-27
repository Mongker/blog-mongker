/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 17/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import TableKhanhHang from './TableKhanhHang/TableKhanhHang';
// import PropTypes from 'prop-types';

function KhanhHang({getList, user}) {
    const data = [
        {
            name: 'Dao Thi Thanh Mai',
            phone: '0394966969',
            email: 'DTTMai@gmail.com',
            dia_chi: 'Phan Đình Phùng - Mỹ Hào - Hưng ',
        },
        {
            name: 'Nguyễn Chí Thanh',
            phone: '0973432499',
            email: 'Thanh99@gmail.com',
            dia_chi: 'Thôn 2, Xã Quảng nhân, Huyện Quảng Xương, Tỉnh Thanh Hóa',
        },
        {
            name: 'Trần Thị Thanh Hằng',
            phone: '0966382408',
            email: 'ThanhHang90@gmail.com',
            dia_chi: 'Đống Đa, Hà Nội',
        },
        {
            name: 'Nguyễn Thị Ngọc Ánh',
            phone: '0394966989',
            email: 'Anhbe@gmail.com',
            dia_chi: 'Mỹ Hào, Hưng Yên',
        },
        {
            name: 'Đào Minh Long',
            phone: '0394988969',
            email: 'Long79@gmail.com',
            dia_chi: 'Văn Lâm, Hưng Yên',
        },{
            name: 'Nguyễn Văn Tỉnh',
            phone: '0994966969',
            email: 'TinhNA@gmail.com',
            dia_chi: 'Thanh Xuân, Hà Nội',
        },
    ];
    React.useEffect(() => {
        getList();
    }, []);
    return(
        <React.Fragment>
            <TableKhanhHang data={Object.values(user)} />
        </React.Fragment>
    );
}

KhanhHang.propTypes = {};

KhanhHang.defaultProps = {};

export default KhanhHang;
