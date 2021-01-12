/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 12/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { useRouter } from 'next/router';
import { Tooltip } from 'antd';

// styles
import styles from '../../components/example/styles/index.module.css';
function index() {
    const router = useRouter();
    const onClickNext = (url) => router.push(url);
    const data = [
        {
            name: 'ADBook',
            url: '/example/abook',
            content: 'Ví dụ này sử dụng getStaticProps và getList API để vẽ ra giao diện ',
        },
        {
            name: 'Lên Xuống',
            url: '/example/updown',
            content: 'Sử dụng Redux + Saga để xử lý các sự kiện trong ReactJS',
        },
    ];
    return (
        <div className={styles.controller}>
            <h1>Menu</h1>
            <span>-----------------</span>
            {data.map((item, index) => (
                <div className={styles.controller_item}>
                    <span className={styles.title}>Ví dụ {index + 1}</span>

                    <Tooltip trigger={'hover'} placement={'right'} title={item.content}>
                        <span role={'button'} onClick={() => onClickNext(item.url)} style={{ cursor: 'pointer' }}>
                            {item.name}
                        </span>
                    </Tooltip>
                </div>
            ))}
        </div>
    );
}

export default index;
