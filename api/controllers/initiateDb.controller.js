
const conn = require("../../db")

module.exports.initializeDb = async function (req, res, fullUrl) {
    conn(fullUrl);
    res.send({ data: { datasource: req.params.db=='true' ? 'MongoDB' : 'MySQL' } });
}