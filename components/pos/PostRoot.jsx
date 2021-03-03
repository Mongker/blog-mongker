/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 03/03/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import MetaView from '../MetaView';
import PostBankV0 from './PostBank.V0';
// import PropTypes from 'prop-types';

function PostRoot() {
    const dataMeta = {
        name: 'Lê Anh Đức',
        icon: 'https://firebasestorage.googleapis.com/v0/b/cms-post-bank.appspot.com/o/cms-post-bank%2Fpngtree-vector-bank-icon-png-image_4015429.jpg?alt=media&token=3b0acd31-2667-46e2-bdfa-f3cbb9a367ea',
        title: 'Đáo thẻ tín dụng Thanh Hóa - 0888.589.678',
        url: 'https://anhduc.cf/',
        image: 'https://firebasestorage.googleapis.com/v0/b/cms-post-bank.appspot.com/o/cms-post-bank%2F%E1%BA%A3nh%20n%E1%BB%81n.jpg?alt=media&token=3cf3f243-7a49-467b-b2ab-e12a8903ff60',
        description: 'Dịch vụ đáo thẻ tín dụng Anh Đức (0888.589.678) đã hoạt động \n được 5 năm và có được sự tin tưởng của hơn 200k người dùng toàn Thanh Hóa, \n với sự phục vụ hết mình chúng tôi đem đến cho bạn những giá trị mà bạn cần. \n Hãy cầm điện thoại và gọi ngay 0888.589.678 để nhận những gì bạn cần nào !',
    }
    return(
        <React.Fragment>
            <MetaView {...dataMeta} />
            <PostBankV0 />
        </React.Fragment>
    );
}

export default PostRoot;
