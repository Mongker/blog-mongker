import React from 'react';
// import PropTypes from 'prop-types';
import HeadView from  '../components/HeadView';
import { Badge } from 'antd';
import {MenuOutlined, ShoppingCartOutlined} from '@ant-design/icons';

function Index() {
  const [windowSize, setWindowSize] = React.useState({
    heightApp: null,
    widthApp: null,
  });
  React.useEffect(() => {
    setWindowSize({
      heightApp: window.innerHeight,
      widthApp: window.innerWidth
    })
  }, [])
  console.log(windowSize.widthApp);
  console.log(windowSize.heightApp);
  return(
        <div className={'controller_page'}>
          <HeadView />
          <div className={'mobile_header'}>
            <div className={'mobile_controller_header'}>
              <div className={'mobile_item_header'}><MenuOutlined /></div>
              <div className={'mobile_title_header'}>Shop Vân Kelly</div>
              <Badge count={20} size="small" >
                <div className={'mobile_item_header'}>
                  <img width={24} height={24} src="https://salt.tikicdn.com/ts/upload/70/44/6c/a5ac520d156fde81c08dda9c89afaf37.png" alt="icon" />
                </div>
              </Badge>
            </div>
            <div className={'mobile_search_input'}>
              <img src="https://salt.tikicdn.com/ts/upload/34/62/0c/6ae13efaff83c66f810c4c63942cf6c0.png" alt="icon-search" />
              <input aria-label={'search'} className={'search'} type={'search'} placeholder={'Bạn cần tìm gì hôm nay ?'}/>
            </div>
            <div className={'mobile_slider_header'} style={{paddingLeft: `${windowSize.widthApp*0.05}px`, paddingRight: `${windowSize.widthApp*0.05}px`}}>
              <img width={windowSize.widthApp*0.9} heigth={(windowSize.widthApp*0.9)/2}  src="https://salt.tikicdn.com/cache/w828/ts/banner/c3/dc/8f/5459f71a05c87b15d7d98c9a87197d32.jpg" alt="https://tiki.vn/chuong-trinh/wipro-unza" />
            </div>
          </div>
        </div>
    );
}

Index.propTypes = {};

Index.defaultProps = {};

export default Index;
