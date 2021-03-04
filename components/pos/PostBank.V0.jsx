/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 12/02/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React, { useState } from 'react';
import { SearchOutlined, ContainerOutlined, PrinterOutlined, UserOutlined, UnlockOutlined } from '@ant-design/icons';
import { Modal, Button, Select, Input, InputNumber, Drawer, message, Popconfirm, Tooltip } from 'antd';
// import PropTypes from 'prop-types';
// styles
import styles from './styles/index.module.scss';

// Util
import addItemCollection from 'util/addItemCollection';
import generateUUID from 'util/generateUUID';
import dataQuery from 'util/dateNow';
import updateItemCollection from 'util/updateItemCollection';
import getQueryData from '../../util/getQueryData';
import useWindowSize from '../hooks/useWindowSize';
import ExportCSV from '../../util/ExportCSV';
// const
const { Option } = Select;
const typeState = {
    user: 'user',
    pass: 'pass',
    name: 'name',
    day: 'day',
    month: 'month',
    year: 'year',
    numberCard: 'numberCard',
    money: 'money',
    percentBank: 'percentBank',
    percentUser: 'percentUser',
    note: 'note',
    optionPost: 'optionPost',
};
function PostBankV0() {
    const { width, height } = useWindowSize();
    const [isLogin, setIsLogin] = useState(true);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isModalPostVisible, setIsModalPostVisible] = useState(false);
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const [post, setPost] = useState('Chọn máy làm');
    const [listPoster, setListPoster] = useState({});
    const [name, setName] = useState('');
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [year, setYear] = useState(0);
    const [optionPost, setOptionPost] = useState('');
    const [numberCard, setNumberCard] = useState(0);
    const [money, setMoney] = useState(0);
    const [percentBank, setPercentBank] = useState(0);
    const [percentUser, setPercentUser] = useState(0);
    const [note, setNote] = useState('');
    const [data, setData] = React.useState({});
    const [sum, setSum] = React.useState({
        money: 0,
        moneyBank: 0,
        moneyUser: 0,
        myMoney: 0,
    });
    const [pass, setPass] = React.useState('');
    const [user, setUser] = React.useState('');
    const handleLogin = () => {
        (user==='admin' && pass==='lethuy92') ? setIsLogin(false) : message.warn('Mật khẩu hoặc tài khoản không đúng');
    }
    const showModal = () => {
        setIsModalVisible(true);
    };
    const resetState = () => {
        setPost('Chọn máy làm');
        setName('');
        setNumberCard(0);
        setMoney(0);
        setPercentBank(0);
        setPercentUser(0);
        setNote(0);
        setYear(0);
        setMonth(0);
        setDay(0);
        setOptionPost(0);
        setIsDrawerVisible(false);
    };

    const handleOk = () => {
        const id = generateUUID();
        const data = {
            uid: id,
            post: post,
            name: name,
            day: `${day}`,
            month: `${month}`,
            year: `${year}`,
            numberCard: numberCard,
            money: money,
            percentBank: percentBank,
            percentUser: percentUser,
            note: note,
            timeCreated: new Date().getTime(),
            status: true,
        };
        if (post !== 'Chọn máy làm' && name.length > 0 && year > 0 && month > 0 && day > 0 && numberCard > 0 && money > 0 && percentUser > 0 && percentBank > 0) {
            if(percentUser > percentBank) {
                addItemCollection('post-bank', id, data);
                setIsModalVisible(false);
                resetState();
            } else {
                message.warn('Phí thu khách phải lớn hơn hoặc bằng phí ngân hàng => Nhập lại');
            }
        } else {
            message.warn('Không được để trống thông tin !');
        }
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        resetState();
    };
    const handleAddPost = () => {
        if (optionPost.length > 0) {
            const id = generateUUID();
            const data = {
                uid: id,
                name: optionPost,
                timeCreated: new Date().getTime(),
                status: true,
            };
            setIsModalPostVisible(false);
            return addItemCollection('poster', id, data);
        } else {
            message.warn('Không được để trống thông tin !');
        }
    };
    const handleDelete = (id, ref) => {
        return updateItemCollection(ref, id, { status: false });
    };
    const handleChange = (value, type) => {
        switch (type) {
            case typeState.name:
                setName(value);
                break;
            case typeState.numberCard:
                setNumberCard(value);
                break;
            case typeState.money:
                setMoney(Math.round(value * 1000000));
                break;
            case typeState.percentBank:
                setPercentBank(value);
                break;
            case typeState.percentUser:
                setPercentUser(value);
                break;
            case typeState.note:
                setNote(value);
                break;
            case typeState.optionPost:
                setOptionPost(value);
                break;
            case typeState.day:
                setDay(value);
                break;
            case typeState.month:
                setMonth(value);
                break;
            case typeState.year:
                setYear(value);
                break;
            case typeState.user:
                setUser(value);
                break;
            case typeState.pass:
                setPass(value);
                break;
            default:
                setPost(value);
                break;
        }
    };
    const handleOffModal = () => {
        setIsModalPostVisible(false);
        setOptionPost('');
    };
    const showDrawer = () => {
        setIsDrawerVisible(true);
    };

    const onClose = () => {
        setIsDrawerVisible(false);
        resetState();
    };
    const handleSearch = () => {
        const data = [];
        day > 0 && data.push(['day', day + '']);
        month > 0 && data.push(['month', month + '']);
        year > 0 && data.push(['year', year + '']);
        numberCard > 0 && data.push(['numberCard', numberCard]);
        name.length > 0 && data.push(['name', name]);
        post !== 'Chọn máy làm' && data.push(['post', post]);
        resetState();
        return getQueryData('post-bank', setData, data);
    };
    const handleResetTable = () => {
        return getQueryData('post-bank', setData, dataQuery);
    };
    const handleResetTableAll = () => {
        return getQueryData('post-bank', setData, []);
    };
    const handleDateNow = () => {
        const date = new Date().toLocaleDateString('en-US').split('/');
        setDay(+date[1]);
        setMonth(+date[0]);
        setYear(+date[2]);
    };
    // CSV
    const customersData = () => {
        const custs = [];
        Object.values(data).map((item, index) => {
            custs.push({
                STT: index + 1,
                Post: item.post,
                Date: item.day + '/' + item.month + '/' + item.year,
                Name: item.name,
                NumberCard: item.numberCard,
                Money: item.money,
                PercentBank: item.percentBank,
                MoneyBank: (item.money * item.percentBank) / 100,
                PercentUser: item.percentUser,
                MoneyUser: (item.money * item.percentUser) / 100,
                MyMoney: item.money * item.percentUser - (item.money * item.percentBank) / 100,
            });
        });
        custs.push({
            STT: ' ',
            Post: ' ',
            Date: ' ',
            Name: ' ',
            NumberCard: ' ',
            Money: sum.money,
            PercentBank: ' ',
            MoneyBank: sum.moneyBank,
            PercentUser: ' ',
            MoneyUser: sum.moneyUser,
            MyMoney: sum.myMoney,
        });
        return custs;
    };
    const customers = customersData();
    const wscols = [
        { wch: Math.max(...customers.map((customer) => customer.STT.length)) },
        { wch: Math.max(...customers.map((customer) => customer.Post.length)) + 5 },
        { wch: Math.max(...customers.map((customer) => customer.Name.length)) + 5 },
        { wch: Math.max(...customers.map((customer) => customer.Date.length)) + 5 },
        { wch: Math.max(...customers.map((customer) => customer.NumberCard.length)) + 5 },
        { wch: Math.max(...customers.map((customer) => customer.Money.length)) + 5 },
        { wch: Math.max(...customers.map((customer) => customer.PercentBank.length)) + 5 },
        { wch: Math.max(...customers.map((customer) => customer.MoneyBank.length)) + 5 },
        { wch: Math.max(...customers.map((customer) => customer.PercentUser.length)) + 5 },
        { wch: Math.max(...customers.map((customer) => customer.MoneyUser.length)) + 5 },
        { wch: Math.max(...customers.map((customer) => customer.MyMoney.length)) + 5 },
    ];

    // JSX
    const titleModal = <div className={styles.title}>Thêm đơn hàng mới</div>;
    const titlePostModal = <div className={styles.title}>Thêm máy mới</div>;
    const titleSearch = <div className={styles.title}>Tìm kiếm siêu dữ liệu</div>;
    const titleLogin = <div className={styles.title}>Đăng nhập</div>;

    React.useEffect(() => {
        getQueryData('post-bank', setData, dataQuery);
        getQueryData('poster', setListPoster, []);
        return () => {
            getQueryData('post-bank');
            getQueryData('poster');
        };
    }, []);
    React.useEffect(() => {
        if (data) {
            let _money = 0;
            let _moneyBank = 0;
            let _moneyUser = 0;
            Object.values(data).map((item) => {
                _money = _money + item.money;
                _moneyBank = _moneyBank + (item.money * item.percentBank) / 100;
                _moneyUser = _moneyUser + (item.money * item.percentUser) / 100;
            });
            setSum({
                money: _money,
                moneyBank: _moneyBank,
                moneyUser: _moneyUser,
                myMoney: _moneyUser - _moneyBank,
            });
        }
    }, [data]);
    const propsExportCSV = {
        icon: <PrinterOutlined />,
        csvData: customers,
        fileName: new Date().toLocaleDateString('en-GB'),
        wscols: wscols,
        className: styles.btn_print,
    };
    return (
        <div className={styles.controller} style={{ width: width, height: height }}>
            <Modal title={titleLogin} visible={isLogin} footer={null} closable={false} width={width*0.4} wrapClassName={'modal_post_bank'}>
                <div className={styles.controller_modal}>
                    <Input onChange={(e) => handleChange(e.target.value, typeState.user)} className={styles.row_modal} size="large" placeholder={'Tài khoản'} prefix={<UserOutlined />} />
                    <Input.Password onChange={(e) => handleChange(e.target.value, typeState.pass)} className={styles.row_modal} size="large" width={'70%'} placeholder={'Mật khẩu'} prefix={<UnlockOutlined />} />
                    <Button className={styles.btn_get_list} onClick={handleLogin}>Đăng nhập</Button>
                </div>
            </Modal>
            <div className={styles.title_table}>Bảng thống kê hóa đơn</div>
            <Button className={styles.btn_search} type={'primary'} icon={<SearchOutlined />} onClick={showDrawer}>
                Tìm kiếm
            </Button>
            <ExportCSV {...propsExportCSV} />
            <table className={styles.table}>
                <tr className={styles.tr}>
                    <th className={styles.th}>STT</th>
                    <th className={styles.th}>Post làm</th>
                    <th className={styles.th}>Ngày làm</th>
                    <th className={styles.th}>Chủ thẻ</th>
                    <th className={styles.th}>Số thẻ</th>
                    <th className={styles.th}>Số tiền</th>
                    <th className={styles.th}>% phí ngân hàng</th>
                    <th className={styles.th}>Phí ngân hàng</th>
                    <th className={styles.th}>% Phí thu khách</th>
                    <th className={styles.th}>Phí thu</th>
                    <th className={styles.th}>Lãi </th>
                    <th className={styles.th}>Note</th>
                    <th className={styles.th}>Event</th>
                </tr>
                {Object.values(data).length > 0 &&
                Object.values(data).map((item, index) => (
                    <tr className={styles.tr}>
                        <td className={styles.td}>{index + 1}</td>
                        <td className={styles.td}>{item.post}</td>
                        <td className={styles.td}>{`${item.day}-${item.month}-${item.year}`}</td>
                        <td className={styles.td}>{item.name}</td>
                        <td className={styles.td}>{item.numberCard}</td>
                        <td className={styles.td} style={{ fontWeight: 'bold' }}>
                            {item.money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnđ
                        </td>
                        <td className={styles.td}>{item.percentBank}</td>
                        <td className={styles.td} style={{ fontWeight: 'bold' }}>
                            {Math.round((item.money * item.percentBank) / 100)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                            vnđ
                        </td>
                        <td className={styles.td}>{item.percentUser}</td>
                        <td className={styles.td} style={{ fontWeight: 'bold' }}>
                            {Math.round((item.money * item.percentUser) / 100)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                            vnđ
                        </td>
                        <td className={styles.td} style={{ fontWeight: 'bold' }}>
                            {Math.round((item.money * item.percentUser - item.money * item.percentBank) / 100)
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}{' '}
                            vnđ
                        </td>
                        <td className={styles.td}>
                            <Tooltip placement='left' title={`Ghi chú: ${item.note}`}>
                                <ContainerOutlined />
                            </Tooltip>
                        </td>
                        <td className={styles.td}>
                            <Popconfirm placement={'left'} title={'Bạn có chắc muốn xóa'} onConfirm={() => handleDelete(item.uid, 'post-bank')} okText='Yes' cancelText='No'>
                                <Button type={'primary'} danger style={{ borderRadius: '5px' }}>
                                    Xóa
                                </Button>
                            </Popconfirm>
                        </td>
                    </tr>
                ))}
                <tr className={styles.trSum}>
                    <td />
                    <td />
                    <td />
                    <td />
                    <td />
                    <td className={styles.td} style={{ fontWeight: 'bold' }}>
                        {Math.round(sum.money).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnđ
                    </td>
                    <td />
                    <td className={styles.td} style={{ fontWeight: 'bold' }}>
                        {Math.round(sum.moneyBank).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnđ
                    </td>
                    <td />
                    <td className={styles.td} style={{ fontWeight: 'bold' }}>
                        {Math.round(sum.moneyUser).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnđ
                    </td>
                    <td className={styles.td} style={{ fontWeight: 'bold' }}>
                        {Math.round(sum.myMoney).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')} vnđ
                    </td>
                    <td />
                    <td />
                </tr>
            </table>
            <Button className={styles.btn_add} type={'primary'} onClick={showModal}>
                Thêm
            </Button>
            <div className={styles.bnt_reset} type={'primary'}>
                <Button type={'primary'} className={styles.btn_get_list} onClick={handleResetTable}>
                    Get Now
                </Button>
                <Button type={'primary'} className={styles.btn_get_list} onClick={handleResetTableAll}>
                    Get All
                </Button>
            </div>

            <Button className={styles.btn_add_post} type={'primary'} onClick={() => setIsModalPostVisible(true)}>
                Thêm máy
            </Button>
            <Drawer
                title={titleSearch}
                placement={'right'}
                closable={true}
                onClose={onClose}
                visible={isDrawerVisible}
                key={'right'}
                width={'30%'}
                // className={styles.drawer_bank}
            >
                <div className={styles.controller_modal}>
                    <div className={styles.row_modal}>
                        <div className={styles.row_title} style={{ width: '30%' }}>
                            Ngày:{' '}
                        </div>
                        <div className={styles.row_content} style={{ width: '70%' }}>
                            <InputNumber placeholder={'Ngày'} min={0} max={31} value={day} onChange={(value) => handleChange(value, typeState.day)} style={{ width: 70 }} />
                            <InputNumber placeholder={'Tháng'} min={0} max={12} value={month} onChange={(value) => handleChange(value, typeState.month)} style={{ width: 70 }} />
                            <InputNumber placeholder={'Năm'} min={0} max={2022} value={year} onChange={(value) => handleChange(value, typeState.year)} style={{ width: 100 }} />
                        </div>
                    </div>
                    <div className={styles.row_modal}>
                        <div className={styles.row_title} style={{ width: '30%' }}>
                            Post làm:{' '}
                        </div>
                        <div className={styles.row_content} style={{ width: '70%' }}>
                            <Select value={[post]} defaultValue={['Chọn máy làm']} style={{ width: '60%' }} onChange={(value) => handleChange(value, typeState.post)}>
                                {listPoster && Object.values(listPoster).map((item) => <Option value={item.name}>{item.name}</Option>)}
                            </Select>
                        </div>
                    </div>
                    <div className={styles.row_modal}>
                        <div className={styles.row_title} style={{ width: '30%' }}>
                            Chủ thẻ:{' '}
                        </div>
                        <div className={styles.row_content} style={{ width: '70%' }}>
                            <Input value={name} onChange={(e) => handleChange(e.target.value, typeState.name)} style={{ width: 200 }} />
                        </div>
                    </div>
                    <div className={styles.row_modal}>
                        <div className={styles.row_title} style={{ width: '30%' }}>
                            Số thẻ:{' '}
                        </div>
                        <div className={styles.row_content} style={{ width: '70%' }}>
                            <InputNumber value={numberCard} onChange={(value) => handleChange(value, typeState.numberCard)} style={{ width: 200 }} />
                        </div>
                    </div>
                    <Button className={styles.btn_search_action} type={'primary'} icon={<SearchOutlined />} onClick={handleSearch}>
                        Tìm kiếm
                    </Button>
                </div>
            </Drawer>
            <Modal title={titlePostModal} visible={isModalPostVisible} onOk={handleAddPost} onCancel={handleOffModal}>
                <div className={styles.controller_modal}>
                    {listPoster &&
                    Object.values(listPoster).map((item) => (
                        <div className={styles.row_content} style={{ marginBottom: '5px' }}>
                            <div className={styles.row_title} style={{ width: '100%' }}>
                                {item.name}
                            </div>
                            <Button type={'primary'} danger onClick={() => handleDelete(item.uid, 'poster')}>
                                Xóa
                            </Button>
                        </div>
                    ))}

                    <Input onChange={(e) => handleChange(e.target.value, typeState.optionPost)} />
                </div>
            </Modal>
            <Modal title={titleModal} visible={isModalVisible} width={'70%'} onOk={handleOk} onCancel={handleCancel} >
                <div className={styles.controller_modal}>
                    <div className={styles.row_modal}>
                        <div className={styles.row_title}>Post làm (*): </div>
                        <div className={styles.row_content}>
                            <Select value={[post]} defaultValue={['Chọn máy làm']} style={{ width: '60%' }} onChange={(value) => handleChange(value, typeState.post)}>
                                {listPoster && Object.values(listPoster).map((item) => <Option value={item.name}>{item.name}</Option>)}
                            </Select>
                        </div>
                    </div>
                    <div className={styles.row_modal}>
                        <div className={styles.row_title}>Ngày làm (*): </div>
                        <div className={styles.row_content}>
                            <InputNumber placeholder={'Ngày'} min={0} max={31} value={day} onChange={(value) => handleChange(value, typeState.day)} style={{ width: 70 }} />
                            <InputNumber placeholder={'Tháng'} min={0} max={12} value={month} onChange={(value) => handleChange(value, typeState.month)} style={{ width: 70 }} />
                            <InputNumber placeholder={'Năm'} min={0} max={2022} value={year} onChange={(value) => handleChange(value, typeState.year)} style={{ width: 100 }} />
                            <Button className={styles.btn_date_now} type={'primary'} onClick={handleDateNow}>
                                Date Now
                            </Button>
                        </div>
                    </div>
                    <div className={styles.row_modal}>
                        <div className={styles.row_title}>Chủ thẻ (*): </div>
                        <div className={styles.row_content}>
                            <Input value={name} onChange={(e) => handleChange(e.target.value, typeState.name)} style={{ width: 200 }} />
                        </div>
                    </div>
                    <div className={styles.row_modal}>
                        <div className={styles.row_title}>Số thẻ (*): </div>
                        <div className={styles.row_content}>
                            <InputNumber value={numberCard} onChange={(value) => handleChange(value, typeState.numberCard)} style={{ width: 200 }} />
                        </div>
                    </div>
                    <div className={styles.row_modal}>
                        <div className={styles.row_title}>Số tiền (*): </div>
                        <div className={styles.row_content}>
                            <InputNumber value={money} onChange={(value) => handleChange(value, typeState.money)} style={{ width: 200 }} />
                        </div>
                    </div>
                    <div className={styles.row_modal}>
                        <div className={styles.row_title}>Phí % ngân hàng (*): </div>
                        <div className={styles.row_content}>
                            <InputNumber value={percentBank} onChange={(value) => handleChange(value, typeState.percentBank)} style={{ width: 100 }} />
                        </div>
                    </div>
                    <div className={styles.row_modal}>
                        <div className={styles.row_title}>Phí % thu khách hàng (*): </div>
                        <div className={styles.row_content}>
                            <InputNumber value={percentUser} onChange={(value) => handleChange(value, typeState.percentUser)} style={{ width: 100 }} />
                        </div>
                    </div>
                    <div className={styles.row_modal}>
                        <div className={styles.row_title}>Chú thích: </div>
                        <div className={styles.row_content}>
                            <Input.TextArea value={note} onChange={(e) => handleChange(e.target.value, typeState.note)} />
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}

PostBankV0.propTypes = {};

PostBankV0.defaultProps = {};

export default PostBankV0;
