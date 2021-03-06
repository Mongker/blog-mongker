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
import useWindowSize from '../../../hooks/useWindowSize';

function NewsDetail({title, note, photo_news}) {
    const {width} = useWindowSize()
    return(
        <React.Fragment>
            <HeaderBlog />
            <img className={styles.img} src={photo_news} style={{width: width}}/>
            <div className={styles.news_container}>
                <div className={styles.news_title}>{title}</div>
                <div className={styles.news_content}>
                    <div dangerouslySetInnerHTML={{ __html: note }} />
                </div>
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
