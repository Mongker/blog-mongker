/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 17/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import TableDonDatHang from './TableDonDatHang/TableDonDatHang';
import { Modal } from 'antd';
import useWindowSize from '../../../hooks/useWindowSize';
import ContentModal from './ContentModal/ContentModal';
// import PropTypes from 'prop-types';

// const
const stylesTitle = {color: 'red', textAlign: 'center', fontWeight: 'bold', fontSize: '24px'};
function DonDatHang() {
    const data = [
        {
            name: 'Đào Thị Thanh ',
            date: '09/05/2019 04:05:52',
            phone: '0394966969',
            gia_tien: '300,000 VNĐ',
            status: false
        },
        {
            name: 'Trần Văn Sơn',
            date: '15/06/2019 05:30:00',
            phone: '0123456789',
            gia_tien: '150,000 VNĐ',
            status: true
        },
        {
            name: 'Nguyễn Mỹ Hạnh',
            date: '09/05/2019 08:15:50',
            phone: '0911324682',
            gia_tien: '300,000 VNĐ',
            status: false
        },
        {
            name: 'Đào Văn Kiên',
            date: '11/05/2019 04:05:50',
            phone: '0973648920',
            gia_tien: '500,000 VNĐ',
            status: true
        },
        {
            name: 'Nguyễn Thị La',
            date: '15/06/2019 04:05:50',
            phone: '0985239928',
            gia_tien: '5,000,000 VNĐ',
            status: true
        },
        {
            name: 'Lê Thanh Hằng',
            date: '11/05/2019 04:05:50',
            phone: '0973648925',
            gia_tien: '100,000 VNĐ',
            status: true
        }
    ];
    const {width} = useWindowSize();
    const [isModalVisibleDetail, setIsModalVisibleDetail] = React.useState(false);

    const handleOk = () => {
        setIsModalVisibleDetail(false);
    }

    const handleCancel = () => {
        setIsModalVisibleDetail(false);
    };
    // JSX
    const Detail = (<div style={stylesTitle}>Chi tiết đơn hàng</div>);

    return(
        <React.Fragment>
            <TableDonDatHang data={data} showModalDetail={setIsModalVisibleDetail} />
            <Modal title={Detail} visible={isModalVisibleDetail} onOk={handleOk} onCancel={handleCancel} wrapClassName={'modal_controller'} width={width*0.6}>
                <ContentModal />
            </Modal>
        </React.Fragment>
    );
}

DonDatHang.propTypes = {};

DonDatHang.defaultProps = {};

export default DonDatHang;
