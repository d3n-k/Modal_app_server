const ApiError = require('../error/ApiError');
const fs = require("fs");

class AnnounceController {
    async save(req, res, next) {
        const { data } = req.body;
        const { id } = req.params;
        console.log("write " + id);
        fs.writeFileSync('./announce' + id + '.txt', data);
        console.log("write success " + id);
        res.send(Promise.resolve());
    }

    async get(req, res, next) {
        const { id } = req.params;
        try {
            const data = fs.readFileSync('./announce' + id + '.txt', { encoding: 'utf8', flag: 'r' });
            console.log("data " + id + " " + data);
            return res.json({ data });
        } catch (e) {
            console.log(e);
            return res.json({ data: "" });
        }
    }
}

module.exports = new AnnounceController();