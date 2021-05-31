/**
 * Copyright 2016-present, Bkav, Corp.
 * All rights reserved.
 *
 * This source code is licensed under the Bkav license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @author monglv@bkav.com on 31/05/2021
 *
 * History:
 * @modifier abc@bkav.com on xx/xx/xxxx đã chỉnh sửa abcxyx (Chỉ các thay đổi quan trọng mới cần ghi lại note này)
 */

'use strict';

import getNews from '../../util/getNews';
import { db } from '../../config/firebase';

const { SitemapStream, streamToPromise } = require('sitemap');
const { Readable } = require('stream');

export default async (req, res) => {

    let links = [];
    let xmlString = ''

    // An array with your links
    const snapshot = await db.collection('news').get(); // MongLV log fix bug);

    if (snapshot.empty) {
        console.log('No matching documents.');
        return;
    }

    snapshot.forEach(doc => {
        // console.log(doc.id, '=>', doc.data());
        links.push({ url: `/${doc.id}`, lastmod: (new Date()).toISOString() });
        // links.push({ url: `/${doc.id}`, changefreq: "daily", priority: 0.3, lastmod: (new Date()).toISOString() });
    });
    links.push({url: `/`, lastmod: (new Date()).toISOString()})
    // links.push({url: `/`, changefreq: "daily", priority: 0.3, lastmod: (new Date()).toISOString()})

    // Create a stream to write to
    const stream = await new SitemapStream({ hostname: `https://${req.headers.host}` });

    await res.writeHead(200, {
        "Content-Type": "application/xml",
    });

    xmlString = await streamToPromise(
        Readable.from(links).pipe(stream)
    ).then((data) => data.toString()).catch((err) => console.log('err', err)); // MongLV log fix bug);

    await res.end(xmlString);
};
