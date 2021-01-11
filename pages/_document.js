/**
 * Copyright 2020 present, Lê Văn Mong.
 * All rights reserved.
 * @author Mongker 11/01/2021
 * @email: levanmong.dola.99@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag'
export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script data-ad-client='ca-pub-2616710485643965' async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>
                  <!-- Global site tag (gtag.js) - Google Analytics -->
                  <script async src="https://www.googletagmanager.com/gtag/js?id=G-TJXXCXXME2"></script>
                  <script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
                  />
                  <script
                    dangerouslySetInnerHTML={{
                      __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                    }}
                  />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
