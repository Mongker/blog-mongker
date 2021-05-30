/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 31/05/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';

import LayoutContainer from '../components/blogs/LayoutContainer';
// import PropTypes from 'prop-types';

function NullPage() {
    return (
        <LayoutContainer>
            <div className={'page_404'}>
                <h1 className="four_zero_four_bg">404</h1>
            </div>
            <p style={{textAlign: 'center', fontSize: 20, fontWeight: 'bold'}}>Không tìm thấy trang web này</p>
        </LayoutContainer>
    );
}

NullPage.propTypes = {};

NullPage.defaultProps = {};

export default NullPage;
