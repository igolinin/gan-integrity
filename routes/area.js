const fs = require('fs-extra');
const utils = require('../utils/utils');
const prepareData = utils.prepareData;
const findByGuid = utils.findByGuid;

exports = module.exports = async function area(req, res) {

    const fromGuid = req.query.from;
    const distance = req.query.distance;
    const from = findByGuid(fromGuid);
    const key = '2152f96f-50c7-4d76-9e18-f7033bd14428';
    res.json;


    res.status(202).send(({
        resultsUrl: `http://127.0.0.1:8080/area-result/${key}`
    }));
    global.ordersStatus[key] = 'wait';
    var data = await prepareData(from, distance);
    await fs.writeFile(`./storage/${key}.json`, JSON.stringify(data));
    global.ordersStatus[key] = 'done';
}
