/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 01/02/2021
 * @email: levanmong.dola.99@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { useRouter } from 'next/router';
import styled from './styles/index.module.css';
import TinyMceEditor from '../example/Tinymce/TinyMceEditor';
import { Button, Input, message } from 'antd';
import useWindowSize from '../hooks/useWindowSize';
import { db } from '../../config/firebase';
import convertVietNamese from '../../util/convertVietNamese';
const getMaxId = () => {
    let max = '';
    const possible = '0123456789';
    for (let i = 0; i < 10; i++) {
        max += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return max;
};
function PostNews() {
    const router = useRouter();
    const [title, setTitle] = React.useState('');
    const [content, setContent] = React.useState('');
    const titleId = () => {
        const arrayTitle = convertVietNamese(title).split(' ');
        const newTitle = arrayTitle.join('-');
        return newTitle + '-' + getMaxId();
    };

    const handleClickAddData = () => {
        const id = titleId();
        const data = {
            title: title,
            uid: id,
            note: content,
        };
        return db
            .collection('news')
            .doc(id)
            .set(data)
            .then(() => {
                console.log('Success');
                message.success('Thêm thành công');
                nextPageNews();
            })
            .catch((error) => {
                console.log(error);
                message.warning(`Thất bại ${error}`);
            });
    };
    const nextPageNews = () => {
        router.push('/blog');
    };
    const { height } = useWindowSize();
    return (
        <div className={styled.post_new_controller} style={{ height: height }}>
            <div className={styled.post_new_edit}>
                <div className={styled.post_title}>Đăng bài viết mới</div>
                <Input onChange={(e) => setTitle(e.target.value)} style={{ fontSize: '30px', textAlign: 'center', fontWeight: 'bold' }} placeholder={'Tiêu đề'} />
                <TinyMceEditor heightApp={height * 0.9} onSave={setContent} />
            </div>
            <Button onClick={handleClickAddData} type='primary' style={{ marginTop: 10, borderRadius: 10, backgroundColor: '#323ebe!important' }}>
                Đăng bài
            </Button>
        </div>
    );
}

PostNews.propTypes = {};

PostNews.defaultProps = {};

export default PostNews;
