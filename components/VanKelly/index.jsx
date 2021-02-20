/**
 * Copyright 2016-present, Bkav Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author monglv@bkav.com on 20/02/2021$.
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { Badge, BackTop } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

// JSX
import MetaView from '../MetaView';

function VanKelly() {
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
    return (
        <React.Fragment>
            <MetaView />
            <div className={'controller_page'}>
                <div className={'mobile_header'}>
                    <div className={'mobile_controller_header'}>
                        <div className={'mobile_item_header'}>
                            <MenuOutlined />
                        </div>
                        <div className={'mobile_title_header'}>Shop Vân Kelly</div>
                        <Badge count={20} size='small'>
                            <div className={'mobile_item_header'}>
                                <img width={24} height={24} src='https://salt.tikicdn.com/ts/upload/70/44/6c/a5ac520d156fde81c08dda9c89afaf37.png' alt='icon' />
                            </div>
                        </Badge>
                    </div>
                    <div className={'mobile_search_input'}>
                        <img src='https://salt.tikicdn.com/ts/upload/34/62/0c/6ae13efaff83c66f810c4c63942cf6c0.png' alt='icon-search' width={24} height={24} />
                        <input aria-label={'search'} className={'search'} type={'search'} placeholder={'Bạn cần tìm gì hôm nay ?'} />
                    </div>
                    <div
                        className={'mobile_slider_header'}
                        style={{
                            paddingLeft: `${windowSize.widthApp * 0.05}px`,
                            paddingRight: `${windowSize.widthApp * 0.05}px`,
                        }}
                    >
                        <img width={windowSize.widthApp * 0.9} heigth={(windowSize.widthApp * 0.9) / 2} src='https://adminbeauty.hvnet.vn/Upload/Files/banner-web-blackfriday.png?width=1170&height=450&v=15042020' alt='https://tiki.vn/chuong-trinh/wipro-unza' />
                    </div>
                    <div className={'mobile_menu_category'}>
                        <div className={'mobile_menu_category_item'}>
                            <img className={'btn-shake'} src='https://salt.tikicdn.com/ts/banner/88/24/ee/0d45f0406c93794bae645c1cbb8353b5.png' alt='Danh mục' width={44} height={44} />
                            <span>Danh mục</span>
                        </div>
                        <div className={'mobile_menu_category_item'}>
                            <img className={'btn-shake'} src='https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png' alt='Facebook' width={44} height={44} />
                            <span>Facebook</span>
                        </div>
                        <div className={'mobile_menu_category_item'}>
                            <img className={'btn-shake'} src='https://www.flaticon.com/svg/static/icons/svg/2518/2518016.svg' alt='Tươi sốngs' width={44} height={44} />
                            <span>Kiến thức</span>
                        </div>
                        <div className={'mobile_menu_category_item'}>
                            <img className={'btn-shake'} src='https://www.flaticon.com/svg/static/icons/svg/906/906382.svg' alt='FREESHIP' width={44} height={44} />
                            <span>Zalo</span>
                        </div>
                    </div>
                </div>
                <div className={'mobile_content'}>
                    <div className={'mobile_content_title'}>
                        <div className={'mobile_content_item_title'}>
                            <img src='https://frontend.tikicdn.com/_mobile-next/static/img/giasoc.svg' alt='flash deal' width={66.5} height={21} />
                            <img src='https://frontend.tikicdn.com/_mobile-next/static/img/flash.gif' alt='flash deal' width={16.4} height={21} />
                            <img src='https://frontend.tikicdn.com/_mobile-next/static/img/homnay.svg' alt='flash deal' width={84} height={21} />
                        </div>
                        <span className={'read_more'}>XEM THÊM</span>
                    </div>
                    <div className={'mobile_content_item'}>bla bla</div>
                    <iframe
                        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d885.093823405133!2d105.8456415!3d21.0059093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135adc53265507d%3A0x80c831e43a125264!2sSalon%20H%26T!5e1!3m2!1svi!2s!4v1612092072583!5m2!1svi!2s'
                        width={windowSize.widthApp * 0.9}
                        height='450'
                        frameBorder='0'
                        style={{ border: 0 }}
                        allowFullScreen=''
                        aria-hidden='false'
                        tabIndex='0'
                    />
                </div>
                <BackTop />
            </div>
        </React.Fragment>
    );
}

VanKelly.propTypes = {};

VanKelly.defaultProps = {};

export default VanKelly;
