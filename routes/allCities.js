const fs = require('fs-extra');
var stream = require('stream');
const addresses = require('../addresses.json');
exports = module.exports = async function allCities(req, res){
    const cities = addresses;
    var rs = new stream.Readable({ objectMode: true });
    rs.push(JSON.stringify(cities));
    rs.push(null);
    rs.pipe(res)
}