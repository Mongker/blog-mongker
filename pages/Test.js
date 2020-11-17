/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker on 16/11/2020
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

function Test() {
	return (
		<div>
			<Head>
				<title>Log Bug</title>
				<link rel='icon' href='/news.ico' />
			</Head>
			<div style={{ color: 'red' }}>Mong</div>
		</div>
	);
}

Test.propTypes = {};

Test.defaultProps = {};

export default Test;
