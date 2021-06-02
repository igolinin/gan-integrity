const express = require('express');
const morgan = require('morgan');
const app = express();

const citiesByTag = require('./routes/citiesByTag');
const distance = require('./routes/distance');
const area = require('./routes/area');
const areaResult = require('./routes/areaResult');
const allCities = require('./routes/allCities');

const auth = require('./middleware/auth')

const port = '8080';

global.ordersStatus = {}; //sorry about that

app.use(express.urlencoded({
    extended: true
}));
app.use(morgan('dev'));
app.use(auth);
app.use('/cities-by-tag', citiesByTag);
app.use('/distance', distance);
app.use('/area', area);
app.use('/area-result/:resultId', areaResult);
app.use('/all-cities', allCities);



app.listen(port);