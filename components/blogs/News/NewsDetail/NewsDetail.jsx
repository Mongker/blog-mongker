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
import styles from '../styles/news.module.scss';
import HeaderBlog from '../../Header/HeaderBlog';

function NewsDetail({title, note}) {
    return(
        <React.Fragment>
            <HeaderBlog />
            <div className={styles.news_container}>
                <div className={styles.news_title}>{title}</div>
                <div className={styles.news_content} dangerouslySetInnerHTML={{ __html: note }} />
            </div>
        </React.Fragment>
    );
}

NewsDetail.propTypes = {
    title: PropTypes.string,
    uid: PropTypes.string,
    note: PropTypes.string,
};

NewsDetail.defaultProps = {
    title: '[Error Server]',
    uid: '[Error Server]',
    note: '[Error Server]',
};

export default NewsDetail;
