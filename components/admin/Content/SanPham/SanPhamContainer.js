/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 17/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// Redux
import { connect } from 'react-redux';

// components
import SanPham from './SanPham';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

const SanPhamContainer = connect(mapStateToProps, mapDispatchToProps)(SanPham);

export default SanPhamContainer;
