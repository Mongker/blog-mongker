/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 14/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
import React from 'react';
// import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import Demo from './chart_content/demo';
import Tron from './chart_content/tron';
function Home() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
            <Demo />
            <Tron />
        </div>
    );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
