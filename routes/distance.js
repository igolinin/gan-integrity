
const utils = require('../utils/utils');
const getDistance = utils.getDistance;
const findByGuid = utils.findByGuid;
exports = module.exports = async function distance(req, res) {

    const fromGuid = req.query.from;
    const toGuid = req.query.to;
    const from = findByGuid(fromGuid);
    const to = findByGuid(toGuid);

    const result = await getDistance(from.latitude, from.longitude, to.latitude, to.longitude);

    res.json({
        from, to, unit: 'km', distance: result
    });
    res.send().status(200);
}

