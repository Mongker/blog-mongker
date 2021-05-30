/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 31/01/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
import React from 'react';

// Util
// import { useRouter } from 'next/router';
import useWindowSize from '../hooks/useWindowSize';

// JSX
import getNews from '../../util/getNews';
import ListNewsReview from './News/ListNewsReview/ListNewsReview';

// styles
import styled from './styles/index.module.scss';
import HeaderBlog from './Header/HeaderBlog';

function Blogs() {
    const { width } = useWindowSize();

    const [data, setData] = React.useState({});

    React.useEffect(() => {
        getNews('news', setData)
        return () => {
            getNews(setData({}));
        };
    }, []);
    return (
        <React.Fragment>
            <HeaderBlog />
            <div className={styled.news_controller} style={{ width: width }}>
                <ListNewsReview data={data} />
            </div>
        </React.Fragment>
    );
}

Blogs.propTypes = {};

Blogs.defaultProps = {};

export default Blogs;
