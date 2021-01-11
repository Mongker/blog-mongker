/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 11/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import axios from 'axios';
import React from 'react';
import { useRouter } from 'next/router';
import RutGonLink from '../../../components/example/RutGonLink/RutGonLink';
// import PropTypes from 'prop-types';

// Note sau này phải tạo file API base để xử lý
function getURL_API(url_compact) {
    return (
        axios
            .get(`https://server-mybook.vercel.app/api/url/${url_compact}`)
            // .get(`http://localhost:1999/api/url/${url_compact}`)
            .then((res) => res.data)
            .catch((error) => console.log(error))
    );
}
export async function getStaticPaths() {
    return { paths: [], fallback: true };
}

export async function getStaticProps(params) {
    const res = await getURL_API(params.params.url);
    if (!res) {
        return {
            notFound: false,
        };
    }
    console.log('params: ', params);
    console.log('res', res ? res.url : '[Error Server]');
    return {
        props: {
            url: res ? res.url : '[Error Server]',
            name: [params['params'].url],
        },
    };
}

function url(props) {
    return <RutGonLink {...props} />;
}

export default url;
