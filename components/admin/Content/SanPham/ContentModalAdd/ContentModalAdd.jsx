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

// const

function ContentModalAdd(props) {
    const {handleOk, handleCancel, post} = props;
    const [nameProduct, setNameProduct] = React.useState(''); // tên của sản phẩm
    const [idCategory, setIdCategory] = React.useState(''); // Id của danh mục
    const [amount, setAmount] = React.useState(0); // Số lượng
    const [price, setPrice] = React.useState(0); // Số lượng
    const [priceSeo, setPriceSeo] = React.useState(0); // Số lượng
    const [description, setDescription] = React.useState(''); // Mảng các ảnh
    const [listImg, setListImg] = React.useState([]); // Mảng các ảnh
    const [fileList, setFileList] = React.useState([]); // Mảng các file ảnh

    const onOk = () => {
        const data = {
            "catalog_id" : idCategory,
            "name" : nameProduct,
            "price" : price,
            "price_seo" : priceSeo,
            "image_link" : listImg,
            "amount" : amount,
            "description" : description,
        };
        debugger; // MongLV
        post(data);
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

    return (
        <Modal onOk={onOk} onCancel={onCancel} {...props}>
            <div className={styles.controller_content_modal}>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Tên sản phẩm: </div>
                    <div className={styles.content_value_item_modal}>
                        <Input value={nameProduct} onChange={(e) => setNameProduct(e.target.value)} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Hình ảnh: </div>
                    <div className={styles.content_value_item_modal}>
                        <UploadImg listImg={listImg} setListImg={setListImg} fileList={fileList} setFileList={setFileList} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Danh mục: </div>
                    <div className={styles.content_value_item_modal}>
                        <SelectDanhMucContainer value={idCategory} onChange={(value) => setIdCategory(value)} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Số lượng: </div>
                    <div className={styles.content_value_item_modal}>
                        <InputNumber value={amount}  onChange={(value) => setAmount(value)} />
                    </div>
                </div>
                <div className={styles.content_item_modal}>
                    <div className={styles.content_title_item_modal}>Giá tiền: </div>
                    <div className={styles.content_value_item_modal}>
                        <InputNumber
                            value={price}
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
                            value={priceSeo}
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
                            initialValue={description}
                            value={description}
                            init={{
                                height: '300px',
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
                                            /* call the callback and populate the Title field with the file name */
                                            cb(blobInfo.blobUri(), { title: file.name });
                                            console.log('file ', file);
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

ContentModalAdd.propTypes = {};

ContentModalAdd.defaultProps = {};

export default ContentModalAdd;
