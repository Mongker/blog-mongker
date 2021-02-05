/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 06/02/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import styles from './styles/index.module.scss';
import useWindowSize from '../../../../hooks/useWindowSize';
// import PropTypes from 'prop-types';

function NewsReview({item}) {
    const {width} = useWindowSize();
    return(
        <div className={styles.controller} style={{width: width*0.9}}>
            <div className={styles.img} />
            <div className={styles.news}>
                <div className={styles.title} />
                <div className={styles.description} />
                <div className={styles.author} />
            </div>
        </div>
    );
}

NewsReview.propTypes = {};

NewsReview.defaultProps = {};

export default NewsReview;
