/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 04/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Button, Image } from 'antd';
import MetaView from '../../MetaView';

// styles
import styles from './index.module.css';

function UpDown({ count, onDown, onUp, product }) {
    if (!product) {
        location.reload();
    }
    return (
        <div className={styles.container}>
            <div>
                <MetaView title={'tăng giảm số'} />
                <h3> React Class Component</h3>
                <h3>Totals: {count}</h3>
            </div>
            <div>
                <Button type='primary' onClick={() => onUp(1)}>
                    Up (+)
                </Button>
                <Button type='primary' danger onClick={() => onDown(1)}>
                    Down (-)
                </Button>
            </div>
            <h1>Sách hay</h1>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'baseline' }}>
                {Object.keys(product).map((item) => (
                    <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 25, justifyContent: 'center', alignItems: 'center' }}>
                        <Image src={`https://server-mybook-1r1b2ebod.vercel.app/api/file/${product[item].image_link[0]}`} width={200} height={400} />
                        <div style={{ color: 'red', fontWeight: 'bolder' }}>{product[item].name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}

UpDown.propTypes = {
    onUp: PropTypes.func,
    onDown: PropTypes.func,
    times: PropTypes.number,
    product: PropTypes.object,
};

UpDown.defaultProps = {
    times: 0,
};

export default UpDown;
