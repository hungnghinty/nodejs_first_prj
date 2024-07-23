const express = require('express')
require('dotenv').config();
const configViewEngine = require('./src/config/view_engine_config');
const expressStatiConfig = require('./src/config/express_static_config');
const webRoutes = require('./src/routes/web');

const app = express()
const port = process.env.PORT || 5404 ;
const hostname =  process.env.HOST_NAME ;
//config template engine
configViewEngine(app);
expressStatiConfig(app);

app.use('/',webRoutes)

app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})