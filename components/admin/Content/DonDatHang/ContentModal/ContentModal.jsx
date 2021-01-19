/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 19/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
// import PropTypes from 'prop-types';

// styles
import styles from './styles/index.module.css';

// const
const styleTable = {
    border: '1px solid #ffff',
}
function ContentModal() {
    return (
        <div className={styles.controller}>
            <h2 style={{color: 'red'}}>Thông tin khách hàng: </h2>
            <div className={styles.table_info}>
                <table style={{width:'100%', border: '1px solid black'}}>
                    <tr style={styleTable}>
                        <td style={styleTable}>Họ và tên:</td>
                        <td style={styleTable}>Đào Thị Thanh Mai</td>
                    </tr>
                    <tr style={styleTable}>
                        <td style={styleTable}>Email:</td>
                        <td style={styleTable}>admin@utt.com</td>
                    </tr>
                    <tr style={styleTable}>
                        <td style={styleTable}>Số điện thoại:</td>
                        <td style={styleTable}>0904195777</td>
                    </tr>
                    <tr style={styleTable}>
                        <td style={styleTable}>Tin nhắn: </td>
                        <td style={styleTable}>Gửi nhanh cho mình nhé</td>
                    </tr>
                    <tr style={styleTable}>
                        <td style={styleTable}>Ngày đặt: </td>
                        <td style={styleTable}>04:05:52 09/05/2020</td>
                    </tr>
                </table>
            </div>
            <h2 style={{color: 'red'}}>Chi tiết đơn đặt hàng: </h2>
            <table className={styles.table_detail}>
                <tr className={styles.item_detail} style={{backgroundColor: '#e9c6c6', textAlign: 'center'}}>
                    <td style={{width: '400px'}}>Tên sản phẩm</td>
                    <td style={styleTable}>Số lượng</td>
                    <td style={styleTable}>Giá</td>
                </tr>
                <tr className={styles.item_detail}>
                    <td style={{width: '400px', ...styleTable}}>
                        <img
                            src='https://daisyshop308.com/wp-content/uploads/2020/05/son-black-rouge-cm5-nau-sam.jpg'
                            alt='san pham'
                            width={50}
                            height={50}
                        />
                        <span>Xịt Thơm cơ thể Bath & Body Works Sun-Ripened</span>
                    </td>
                    <td style={{textAlign: 'center',...styleTable}}>10</td>
                    <td style={{textAlign: 'center',...styleTable}}>300,000 VNĐ</td>
                </tr>
                <tr className={styles.item_detail}>
                    <td style={{width: '400px', ...styleTable}}>
                        <img
                            src='https://daisyshop308.com/wp-content/uploads/2020/05/son-black-rouge-cm5-nau-sam.jpg'
                            alt='san pham'
                            width={50}
                            height={50}
                        />
                        <span>Xịt hôi nách haha</span>
                    </td>
                    <td style={{textAlign: 'center',...styleTable}}>10</td>
                    <td style={{textAlign: 'center',...styleTable}}>300,000 VNĐ</td>
                </tr>
            </table>
        </div>
    );
}

ContentModal.propTypes = {};

ContentModal.defaultProps = {};

export default ContentModal;
