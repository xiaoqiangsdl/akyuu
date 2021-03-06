/**
 * XadillaX created at 2016-05-22 17:15:21 With ♥
 *
 * Copyright (c) 2016 Souche.com, all rights
 * reserved.
 */
"use strict";

module.exports = {
    bodyParser: {
        enabled: true,
        urlencoded: {
            limit: "100kb",
            extended: false
        }
    },
    cookieParser: {
        enabled: true,
        secret: "akyuujs-demo"
    },
    requestLogger: {
        enabled: true
    }
};
