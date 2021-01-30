/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 04/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student-code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

const typeAction = {
    UP: 'UP',
    DOWN: 'DOWN',
    SHOP_MY_PHAM: {
        CALL_GET_LIST_CATALOG: 'CALL_GET_LIST_CATALOG',
        GET_LIST_CATALOG: 'GET_LIST_CATALOG',
        WINDOW_SIZE: 'WINDOW_SIZE',
        CATALOG_POST: 'CATALOG_POST',
        CATALOG_DELETE: 'CATALOG_DELETE',
        CATALOG_PUT: 'CATALOG_PUT',
        PRODUCT_CALL_GET: 'PRODUCT_CALL_GET',
        PRODUCT_GET: 'PRODUCT_GET',
        PRODUCT_POST: 'PRODUCT_POST',
        PRODUCT_DELETE: 'PRODUCT_DELETE',
        PRODUCT_PUT: 'PRODUCT_PUT',
        ADMIN_POST: 'ADMIN_POST',
        ADMIN_CALL_GET: 'ADMIN_CALL_GET',
        ADMIN_GET: 'ADMIN_GET',
        ADMIN_DELETE: 'ADMIN_DELETE',
        ADMIN_PUT: 'ADMIN_PUT',
        ADMIN_LOGIN: 'ADMIN_LOGIN',
        USER_GET: 'USER_GET',
        USER_CALL_GET: 'USER_CALL_GET',
        LOGIN_ADMIN: 'LOGIN_ADMIN',
        LOGIN_UPDATE: 'LOGIN_UPDATE',
        LOGIN_REMOVE: 'LOGIN_REMOVE',
    },
};

export default typeAction;
