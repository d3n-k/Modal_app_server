const ApiError = require('../error/ApiError');
const path = require('path');
const fs = require('fs');

class FileController {
    async save(req, res, next) {
        try {
            const files = req.files;
            for (let i = 0; i < 20; i++) {
                let file = files[`file-${i}`];
                if (file) {
                    console.log("save file " + file.name);
                    file.mv(path.resolve(__dirname, '..', 'userFiles', file.name));
                }
            }
            res.send(Promise.resolve());
        } catch (e) {
            console.log(e);
            res.send(Promise.reject());
        }
    }

    async get(req, res, next) {
        try {
            const { filename } = req.params;
            let filePath = path.resolve(__dirname, '..', 'userFiles', filename);
            if (fs.existsSync(filePath)) {
                res.sendFile(filePath);
            } else {
                res.send({ error: "Файл не найден" });
            }
        } catch (e) {
            console.log(e);
            res.send({ error: "Файл не найден" });
        }
    }

    async getAll(req, res, next) {
        const directoryPath = path.resolve(__dirname, '..', 'userFiles');//path.join(__dirname, 'userFiles');
        fs.readdir(directoryPath, function (err, files) {
            //handling error
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
            //listing all files using forEach
            console.log("files " + JSON.stringify(files));
            res.send({ files: files });
        });
    }

    async delete(req, res, next) {
        try {
            const { filename } = req.params;
            console.log("delete file " + filename);
            let filePath = path.resolve(__dirname, '..', 'userFiles', filename);
            fs.unlinkSync(filePath);
            res.send(Promise.resolve());
        } catch (e) {
            console.log(e);
            res.send(Promise.reject());
        }
    }
}

module.exports = new FileController();