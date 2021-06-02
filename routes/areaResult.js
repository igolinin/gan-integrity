const fs = require('fs-extra');
exports = module.exports = async function areaResult(req, res) {

    const resultId = req.params.resultId;
    if (global.ordersStatus[resultId] === 'done') {
        const file = await fs.readFile(`./storage/${resultId}.json`);
        var cities = JSON.parse(file);
        delete global.ordersStatus[resultId];
        await fs.remove(`./storage/${resultId}.json`);
        res.json({ cities });
        res.status(200).send();
    } else {
        res.status(202).send();
    }

}