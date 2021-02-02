/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 02/02/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/index.module.css';
function News({title, uid, note}) {
    console.log('title', title);
    return(
        <div>{title && title} {uid && uid}</div>
    );
}

News.propTypes = {
    title: PropTypes.string,
    uid: PropTypes.string,
    note: PropTypes.string,
};

News.defaultProps = {
    title: '[Error Server]',
    uid: '[Error Server]',
    note: '[Error Server]',
};

export default News;
