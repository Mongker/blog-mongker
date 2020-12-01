import React from 'react';
// import PropTypes from 'prop-types';
import HeadView from '../components/HeadView';
import { Badge, BackTop } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

function Index() {
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
    <div className={'controller_page'}>
      <HeadView />
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
          <img
            width={windowSize.widthApp * 0.9}
            heigth={(windowSize.widthApp * 0.9) / 2}
            src='https://adminbeauty.hvnet.vn/Upload/Files/banner-web-blackfriday.png?width=1170&height=450&v=15042020'
            alt='https://tiki.vn/chuong-trinh/wipro-unza'
          />
        </div>
        <div className={'mobile_menu_category'}>
          <div className={'mobile_menu_category_item'}>
            <img className={'btn-shake'} src='https://salt.tikicdn.com/ts/banner/88/24/ee/0d45f0406c93794bae645c1cbb8353b5.png' alt='Danh mục' width={44} height={44} />
            <span>Danh mục</span>
          </div>
          <div className={'mobile_menu_category_item'}>
            <img
              className={'btn-shake'}
              src='https://cdn.icon-icons.com/icons2/1826/PNG/512/4202110facebooklogosocialsocialmedia-115707_115594.png'
              alt='Facebook'
              width={44}
              height={44}
            />
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
      </div>
      <BackTop />
    </div>
  );
}

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
