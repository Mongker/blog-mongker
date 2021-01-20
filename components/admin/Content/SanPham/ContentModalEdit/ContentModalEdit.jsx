/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 19/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import { Input, InputNumber, Modal, Select } from 'antd';
import UploadImg from '../Upload/UploadImg';
import { Editor } from '@tinymce/tinymce-react';
// import PropTypes from 'prop-types';

// styles
import styles from '../styles/index.module.css';
import SelectDanhMucContainer from '../SelectDanhMuc/SelectDanhMucContainer';
import { URL_API } from 'redux/api/config';

// const

function ContentModalEdit(props) {
    const {handleOk, handleCancel, data, put, idEdit} = props;

    const [nameProduct, setNameProduct] = React.useState(''); // tên của sản phẩm
    const [idCategory, setIdCategory] = React.useState(''); // Id của danh mục
    const [amount, setAmount] = React.useState(0); // Số lượng
    const [price, setPrice] = React.useState(0); // Số lượng
    const [priceSeo, setPriceSeo] = React.useState(0); // Số lượng
    const [description, setDescription] = React.useState(''); // Mảng các ảnh
    const [listImg, setListImg] = React.useState([]); // Mảng các ảnh
    const [fileList, setFileList] = React.useState([]); // Mảng các file ảnh
    const onOk = () => {
        debugger; // MongLV
        const a = (priceSeo !== 0) ? priceSeo : data.price_seo;
        const _data = {
            "catalog_id" : (idCategory.length > 0) ? idCategory : data.catalog_id,
            "name" : (nameProduct.length > 0) ? nameProduct : data.name,
            "price" : (price !== 0) ? price : data.price,
            "price_seo" : a,
            "image_link" : (listImg.length > 0) ? listImg : data.image_link,
            "amount" : (amount !== 0) ? amount : data.amount,
            "description" : (description.length > 0) ? description : data.description,
        };

        put(idEdit, _data);
        resetCache();
        handleOk();
    };
    const onCancel = () => {
        resetCache();
        handleCancel();
    }

    const resetCache = () => {
        setNameProduct('');
        setPriceSeo(0);
        setDescription('');
        setListImg([]);
        setIdCategory('');
        setAmount(0);
        setPrice(0);
        handleOk();
        setFileList([]);
    }

    const createListFile = () => {
        if(data) {
            let array = [];
            if(data.image_link) {
                data.image_link.map((item) => {
                    array.push({
                        uid: '-1',
                        name: 'image.png',
                        status: 'done',
                        url: `${URL_API.img}${item}`,
                    })
                });
            }
            return array;
        }
    }
    React.useEffect(() => {
        if(fileList && fileList.length === 0) {
            console.log('fileList', fileList);
            const array = createListFile();
            setFileList(array);
        }
    }, [fileList])
    React.useEffect(() => {
        if(fileList && fileList.length === 0) {
            console.log('fileList', fileList);
            const array = createListFile();
            setFileList(array);
        }
    }, [fileList])
    return (
        <Modal onOk={onOk} onCancel={onCancel} {...props}>
            <div className={styles.controller_content_modal}>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Tên sản phẩm: </div>
                    <div className={styles.content_value_item_modal}>
                        <Input defaultValue={data.name || nameProduct} onChange={(e) => setNameProduct(e.target.value)} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Hình ảnh: </div>
                    <div className={styles.content_value_item_modal}>
                        <UploadImg listImg={data.image_link || listImg} setListImg={setListImg} fileList={fileList} setFileList={setFileList} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Danh mục: </div>
                    <div className={styles.content_value_item_modal}>
                        <SelectDanhMucContainer value={data.catalog_id ||idCategory} onChange={(value) => setIdCategory(value)} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Số lượng: </div>
                    <div className={styles.content_value_item_modal}>
                        <InputNumber value={data.amount ||amount}  onChange={(value) => setAmount(value)} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Giá tiền: </div>
                    <div className={styles.content_value_item_modal}>
                        <InputNumber
                            defaultValue={data.price || price}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            onChange={(value) => setPrice(value)}
                            style={{width: '50%'}}
                        />
                        <div style={{marginLeft: '5px'}}>VNĐ</div>
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Giảm giá:: </div>
                    <div className={styles.content_value_item_modal}>
                        <InputNumber
                            defaultValue={data.price_seo || priceSeo}
                            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                            parser={value => value.replace(/\$\s?|(,*)/g, '')}
                            onChange={(value) => setPriceSeo(value)}
                            style={{width: '50%'}}
                        />
                        <div style={{marginLeft: '5px'}}>VNĐ</div>
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Chi tiết: </div>
                    <div className={styles.content_value_item_modal}>
                        <Editor
                            apiKey='4k95hdk87th2mmwysccl9lvu2ap1ehtwjn1hd7qnkk4d6ziv'
                            value={data.description || description}
                            init={{
                                height: '500px',
                                menubar: true,
                                plugins: ['advlist autolink lists link image charmap print preview anchor', 'searchreplace visualblocks code fullscreen', 'insertdatetime media table paste code help wordcount'],
                                toolbar: 'undo redo | formatselect | link image | bold italic backcolor |\
                    alignleft aligncenter alignright alignjustify | \
                    bullist numlist outdent indent | removeformat | help',
                                image_title: true,
                                automatic_uploads: true,
                                file_picker_types: 'image',
                                file_picker_callback: function (cb, value, meta) {
                                    const input = document.createElement('input');
                                    input.setAttribute('type', 'file');
                                    input.setAttribute('accept', 'image/*');

                                    /*
                                  Note: In modern browsers input[type="file"] is functional without
                                  even adding it to the DOM, but that might not be the case in some older
                                  or quirky browsers like IE, so you might want to add it to the DOM
                                  just in case, and visually hide it. And do not forget do remove it
                                  once you do not need it anymore.
                                */
                                    input.onchange = function () {
                                        const file = this.files[0];

                                        const reader = new FileReader();
                                        reader.onload = function () {
                                            /*
                                      Note: Now we need to register the blob in TinyMCEs image blob
                                      registry. In the next release this part hopefully won't be
                                      necessary, as we are looking to handle it internally.
                                    */
                                            const id = 'blobid' + new Date().getTime();
                                            const blobCache = tinymce.activeEditor.editorUpload.blobCache;
                                            const base64 = reader.result.split(',')[1];
                                            const blobInfo = blobCache.create(id, file, base64);
                                            blobCache.add(blobInfo);
                                            console.log('blobInfo.blobUri(): ', blobInfo.blobUri());
                                            /* call the callback and populate the Title field with the file name */
                                            // cb(blobInfo.blobUri(), { title: file.name });
                                            cb(blobInfo.blobUri(), { title: file.name });
                                        };
                                        reader.readAsDataURL(file);
                                    };
                                    input.click();
                                },
                            }}
                            onChange={(e) => setDescription(e.target.getContent())}
                        />
                    </div>
                </div>
            </div>
        </Modal>
    );
}

ContentModalEdit.propTypes = {};

ContentModalEdit.defaultProps = {};

export default ContentModalEdit;
