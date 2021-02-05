/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 03/02/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import NewsReview from './NewsDetail/NewsReview';
// import PropTypes from 'prop-types';

function ListNewsReview({data}) {
    return(
        <div>
            {Object.values(data).length > 0 && Object.values(data).map((item) => (<NewsReview key={item.uid} item={item} />))}
        </div>
    );
}

ListNewsReview.propTypes = {};

ListNewsReview.defaultProps = {};

export default ListNewsReview;
