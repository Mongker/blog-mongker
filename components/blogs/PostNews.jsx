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
import styled from './styles/index.module.scss';
import TinyMceEditor from '../example/Tinymce/TinyMceEditor';
import { Button, Input, message, Upload } from 'antd';
import useWindowSize from '../hooks/useWindowSize';
import convertVietNamese from '../../util/convertVietNamese';
import addItemCollection from '../../util/addItemCollection';
import uploadFirebase from '../../util/uploadFirebase';
// import convertHtmlToTextVN from '../../util/convertHtmlToTextVN';
const imgDefault = 'https://firebasestorage.googleapis.com/v0/b/blog-mongker.appspot.com/o/default%2Fpost-news-default.png?alt=media&token=0bf62a9c-508a-4a63-86cc-e3c8bcb96b39';
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
    const [viewURL, setViewURL] = React.useState(imgDefault);
    const [descriptionState, setDescriptionState] = React.useState('');
    const [listPhotoNews, setListPhotoNews] = React.useState([]);
    const titleId = () => {
        const arrayTitle = convertVietNamese(title).split(' ');
        const newTitle = arrayTitle.join('-');
        return newTitle + '-' + getMaxId();
    };
    console.log('viewURL', viewURL);
    const apiUpload = {
        name: 'file',
        fileList: [],
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
                uploadFirebase(info.fileList[0], null, setViewURL)
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };
    const handleClickAddData = () => {
        const id = titleId();
        const data = {
            title: title,
            description: descriptionState,
            uid: id,
            note: content,
            photo_news: viewURL,
            list_img_news: listPhotoNews,
            auth: 'root',
        };
        return addItemCollection('news', id, data, nextPageNews)
    };
    const nextPageNews = () => {
        router.push('/blog');
    };
    const { height } = useWindowSize();
    return (
        <div className={styled.post_new_controller} style={{ height: height }}>
            <div className={styled.post_new_edit}>
                <div className={styled.post_title}>Đăng bài viết mới</div>
                <div className={styled.controller_title}>
                    <div className={styled.img}>
                        <Upload {...apiUpload}>
                            <img src={viewURL} alt={'mặc định'} style={{width: '100%'}} />
                        </Upload>
                    </div>
                    <div className={styled.title_news}>
                        <Input.TextArea onChange={(e) => setTitle(e.target.value)} style={{ fontSize: '30px', textAlign: 'center', fontWeight: 'bold', height: '100%' }} placeholder={'Tiêu đề'} />
                    </div>
                </div>
                <TinyMceEditor setDescriptionState={setDescriptionState} heightApp={height * 0.9} onSave={setContent} setListPhotoNews={setListPhotoNews} listPhotoNews={listPhotoNews} />
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
