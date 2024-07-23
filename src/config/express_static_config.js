const express = require('express');
const expressStatiConfig = (app) => {
    app.use(express.static('./src/public'))
}

module.exports  = expressStatiConfig;