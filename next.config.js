/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mai on 14/01/2021
 * @email: sukhacbiet1199@gmail.com
 * @student_code: 68DCHT25114
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
const withLess = require('@zeit/next-less');
const lessToJS = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');
const withCss = require('@zeit/next-css');

const themeVariables = lessToJS(fs.readFileSync(path.resolve(__dirname, './antd.less'), 'utf8'));

module.exports = withCss({
    cssModules: true,
    ...withLess({
        lessLoaderOptions: {
            javascriptEnabled: true,
            modifyVars: themeVariables,
        },
        webpack: (config, { isServer, dev }) => {
            if (isServer) {
                const antStyles = /antd\/.*?\/style.*?/;
                const origExternals = [...config.externals];
                config.externals = [
                    (context, request, callback) => {
                        if (request.match(antStyles)) return callback();
                        if (typeof origExternals[0] === 'function') {
                            origExternals[0](context, request, callback);
                        } else {
                            callback();
                        }
                    },
                    ...(typeof origExternals[0] === 'function' ? [] : origExternals),
                ];

                config.module.rules.unshift({
                    test: antStyles,
                    use: 'null-loader',
                });
            }
            config.resolve.alias['@'] = path.resolve(__dirname);
            return config;
        },
    }),
});
