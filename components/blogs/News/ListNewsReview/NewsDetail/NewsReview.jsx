/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 06/02/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
import { NavBar, Icon } from 'antd-mobile';

// hooks
import useWindowSize from '../../../../hooks/useWindowSize';

// styles
import styles from './styles/index.module.scss';

function NewsReview({item}) {
    const {width} = useWindowSize();
    const router = useRouter();
    const handleNextNewDetail = () => router.push(`/blog/${item.uid}`);
    return(
        <div onClick={handleNextNewDetail} className={styles.controller} style={{width: width*0.9}}>
            <img className={styles.img} src={item.photo_news} alt='anh nen' />
            <div className={styles.news}>
                <div className={styles.title}>{item.title}</div>
                {/* TODO: sẽ xem lại cơ chế này */}
                {/*<div className={styles.description}>*/}
                {/*    {item.description.slice(0, 100)}*/}
                {/*</div>*/}
                <div className={styles.author}>
                    <img className={styles.avatar} src='https://s240-ava-talk.zadn.vn/8/f/3/5/6/240/499c8cfa904f6c89e44aed82aab25b06.jpg' alt='avatar' />
                    <div className={styles.name_author}>Mongker</div>
                </div>
            </div>
        </div>
    );
}

NewsReview.propTypes = {};

NewsReview.defaultProps = {};

export default NewsReview;
