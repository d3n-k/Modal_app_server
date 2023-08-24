const ApiError = require("../error/ApiError");
const ActiveDirectory = require("activedirectory");
const dotenv = require("dotenv");
dotenv.config();
const config = {
    url: process.env.USERS_BASE_URL,
    baseDN: process.env.USERS_BASE_DN,
    username: process.env.DEFAULT_USERNAME,
    password: process.env.DEFAULT_PASSWORD,
};

class UserController {
    async registration(req, res, next) {
        console.log(JSON.stringify(req.body));
        const { login, password } = req.body;
        console.log("login " + login + " " + password);
        if (!login || !password) {
            return next(ApiError.badRequest("Некорректный логин или пароль!"));
        }
        const ad = new ActiveDirectory(config);
        ad.authenticate(login, password, function (err, auth) {
            if (err) {
                console.log("ERROR: " + JSON.stringify(err));
                return next(ApiError.badRequest("Ошибка! Неправильный пароль..."));
            }
            if (auth) {
                console.log("Authenticated!");
                //res.send(Promise.resolve());
                return res.json({ auth });
            } else {
                console.log("Authentication failed!");
                return next(ApiError.badRequest("Непредвиденная ошибка..."));
            }
        });
    }
}

module.exports = new UserController();
