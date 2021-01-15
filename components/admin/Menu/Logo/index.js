/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 12/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

// style
import styles from '../../styles/index.module.css';

function Logo() {
    return (
        <div className={styles.logo}>
            <img src='https://daisyshop308.com/wp-content/uploads/2020/04/cropped-LOGO123-3-270x270.png' alt='icon' width={30} height={30} style={{ borderRadius: 50, marginRight: '5px' }} />
            <div>DaisyShop</div>
        </div>
    );
}
export default Logo;
