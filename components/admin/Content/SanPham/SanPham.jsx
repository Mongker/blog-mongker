/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 17/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import TableSanPham from './TableSanPham/TableSanPham';
import { Button, Modal } from 'antd';
import ContentModalContainer from './ContentModal/ContentModalContainer';
import useWindowSize from '../../../hooks/useWindowSize';
// import PropTypes from 'prop-types';

// const
const stylesTitle = {color: 'red', textAlign: 'center', fontWeight: 'bold', fontSize: '24px'};
function SanPham() {
    const array = [
        {
            src: 'https://daisyshop308.com/wp-content/uploads/2020/05/son-black-rouge-cm5-nau-sam.jpg',
            name: 'Son Black Rouge CM05',
            view: '50',
            daban: '0',
            soluong: '60',
            danhmuc: 'TRANG ĐIỂM MÔI',
            gia_tien: '160.000,0 VNĐ',
        },
        {
            src: 'https://daisyshop308.com/wp-content/uploads/2020/05/nuoc-hoa-dior-joy-1.jpg',
            name: 'Nước hoa Dior Joy EDP 5ml',
            view: '200',
            daban: '60',
            soluong: '99',
            danhmuc: 'NƯỚC HOA NỮ',
            gia_tien: '110,000 VNĐ',
        },
        {
            src: 'https://daisyshop308.com/wp-content/uploads/2020/07/dau-tay-trang-DHC-5.jpg',
            name: 'Dầu tẩy trang DHC',
            view: '70',
            daban: '9',
            soluong: '60',
            danhmuc: 'LÀM SẠCH DA',
            gia_tien: '80,000 VNĐ',
        },
        {
            src: 'https://daisyshop308.com/wp-content/uploads/2020/05/nuoc-tay-trang-senka1.jpg',
            name: 'Nước tẩy trang Senka',
            view: '69',
            daban: '6',
            soluong: '60',
            danhmuc: 'LÀM SẠCH DA',
            gia_tien: '180,000 VNĐ',
        },
        {
            src: 'http://liulostore.com/content/images/thumbs/0006820_son-kem-black-rouge-air-fit-velvet-tint_550.jpeg',
            name: 'Son mỹ',
            view: '50',
            daban: '0',
            soluong: '60',
            danhmuc: 'TRANG ĐIỂM MÔI',
            gia_tien: '80,000 VNĐ',
        },
        {
            src: 'https://daisyshop308.com/wp-content/uploads/2020/07/xit-thom-co-the-Bath-And-Body-Works-Sun-Ripened-Raspberry-3.jpg',
            name: 'Xịt Thơm cơ thể Bath & Body Works Sun-Ripened',
            view: '70',
            daban: '22',
            soluong: '90',
            danhmuc: 'XỊT THƠM BODY',
            gia_tien: '80,000 VNĐ',
        },
    ];
    const [isModalVisibleAdd, setIsModalVisibleAdd] = React.useState(false);
    const [isModalVisibleEdit, setIsModalVisibleEdit] = React.useState(false);
    const {height, width} = useWindowSize();
    const showModal = () => {
        setIsModalVisibleAdd(true);
    };

    const handleOk = () => {
        setIsModalVisibleAdd(false);
        setIsModalVisibleEdit(false);
    };

    const handleCancel = () => {
        setIsModalVisibleAdd(false);
        setIsModalVisibleEdit(false);
    };
    const TitleAdd = (<div style={stylesTitle}>Thêm sản phẩm</div>);
    const TitleEdit = (<div style={stylesTitle}>Sửa sản phẩm</div>);
    return(
        <div className={'san-pham'}>
            <TableSanPham data={array} setIsModalVisibleEdit={setIsModalVisibleEdit}/>
            <Button onClick={showModal} style={{borderRadius: '20px', color: 'red',  fontWeight: 'bold', backgroundColor: 'pink', marginLeft: '94%', marginTop: '10px'}}>Thêm</Button>
            <Modal title={TitleAdd} visible={isModalVisibleAdd} onOk={handleOk} onCancel={handleCancel} wrapClassName={'modal_sanpham_controller'} width={width*0.6}>
                <ContentModalContainer />
            </Modal>
            <Modal title={TitleEdit} visible={isModalVisibleEdit} onOk={handleOk} onCancel={handleCancel} wrapClassName={'modal_sanpham_controller'} width={width*0.6}>
                <ContentModalContainer />
            </Modal>
        </div>
    );
}

SanPham.propTypes = {};

SanPham.defaultProps = {};

export default SanPham;
