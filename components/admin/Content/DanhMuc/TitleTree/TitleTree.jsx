/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 14/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { DashOutlined } from '@ant-design/icons';

// Hooks
import useWindowSize from '../../../../hooks/useWindowSize';

function TitleTree({ name }) {
    const { width, height } = useWindowSize();
    return (
        <div style={{ width: width * 0.5, display: 'flex', flexDirection: 'row', f }}>
            <div>{name}</div>
            <div style={{ fontSize: '25px' }}>
                <DashOutlined />
            </div>
        </div>
    );
}

TitleTree.propTypes = {
    name: PropTypes.string,
};

TitleTree.defaultProps = {
    name: '[Error Server]',
};

export default TitleTree;
