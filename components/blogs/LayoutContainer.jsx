/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 31/05/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import MetaView from '../MetaView';
import HeaderBlog from './Header/HeaderBlog';
// import PropTypes from 'prop-types';

function LayoutContainer(props) {
    return(
        <React.Fragment>
            <MetaView />
            <HeaderBlog />
            {props.children}
        </React.Fragment>
    );
}

LayoutContainer.propTypes = {};

LayoutContainer.defaultProps = {};

export default LayoutContainer;
