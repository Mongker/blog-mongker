/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 11/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { Button } from 'antd';
// import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Link from 'next/link';

// Note: Xem xét đưa API này vào trong web: https://api.baomoi.com/v1/webs/get/content-by-region?platform=1&short_name=HA_NOI&img_size=w200_r1x1&start=0&size=10
function RutGonLink({ name, url }) {
    const router = useRouter();
    const [windowSize, setWindowSize] = React.useState({
        heightApp: null,
        widthApp: null,
    });

    React.useEffect(() => {
        setWindowSize({
            heightApp: window.innerHeight,
            widthApp: window.innerWidth,
        });
    }, []);

    const onNextLink = () => {
        router.push(url);
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h1 style={{ color: 'red' }}>{url}</h1>
            <h1 style={{ color: 'red' }}>{name}</h1>
            <Button onClick={onNextLink}>Chuyển link</Button>
            <Link href={'/'}>Về home</Link>
            <iframe src={url} width={windowSize.widthApp} height={windowSize.heightApp} />
        </div>
    );
}

export default RutGonLink;
