/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 16/02/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
const date = new Date().toLocaleDateString('en-US').split('/');
const dateQuery = [
    ['month', date[0]],
    ['day', date[1]],
    ['year', date[2]],
];
export default dateQuery;
