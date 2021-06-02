const addresses = require('../addresses.json');
exports.getDistance = async function getDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return parseFloat(d.toFixed(2));
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}
exports.findByGuid = function findByGuid(guid) {
    return addresses.find(addr => addr.guid == guid);
}
exports.prepareData = async function prepareData(from, maxDistance) {
    let indexesToFilter = await Promise.all(addresses.map(async addr => {
        let distance = await exports.getDistance(from.latitude, from.longitude, addr.latitude, addr.longitude);
        return distance < maxDistance && distance > 0;
    }));
    let filteredCities = addresses.filter((addr, index) => indexesToFilter[index])

    return filteredCities;
}


