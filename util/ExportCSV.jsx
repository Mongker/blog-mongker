/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 14/02/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { Button } from 'antd';
import FileSaver from 'file-saver';
import XLSX from 'xlsx';

const ExportCSV = (props) => {
    const { csvData, fileName, wscols } = props;
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';

    const Heading = [
        {
            STT: 'Stt',
            Post: 'Maý Post',
            Date: 'Ngày làm',
            Name: 'Chủ thẻ',
            NumberCard: 'Số thẻ',
            Money: 'Tiền',
            PercentBank: '% ngân hàng',
            MoneyBank: 'Tiền ngân hàng',
            PercentUser: '% lấy khách',
            MoneyUser: 'Tiền thu khách',
            MyMoney: 'Tiền lãi',
        }
    ];
    // const header = Object.keys(Heading[0]);
    const header = Object.values(Heading[0]);
    const exportToCSV = (csvData, fileName, wscols) => {
        const ws = XLSX.utils.json_to_sheet(Heading, {
            header: header,
            skipHeader: true,
            origin: 0, //ok
        });
        ws['!cols'] = wscols;
        XLSX.utils.sheet_add_json(ws, csvData, {
            header: header,
            skipHeader: true,
            origin: -1, //ok
        });
        const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, fileName + fileExtension);
    };
    // const exportToCSV = (csvData, fileName) => {
    //     const ws = XLSX.utils.json_to_sheet(csvData);
    //     const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    //     const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    //     const data = new Blob([excelBuffer], { type: fileType });
    //     FileSaver.saveAs(data, fileName + fileExtension);
    // };

    return (
        <Button onClick={(e) => exportToCSV(csvData, fileName, wscols)} {...props}>
            Export XLSX
        </Button>
    );
};

export default ExportCSV;
