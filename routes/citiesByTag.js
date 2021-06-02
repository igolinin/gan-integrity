const addresses = require('../addresses.json');
exports = module.exports = async function citiesByTag(req, res) {
    const tag = req.query.tag;
    const isActive = req.query.isActive;
    var cities = addresses.filter(address => {
        return address.tags.includes(tag) && address.isActive;
    })
    res.json({ cities: cities });
    res.send().status(200);
}