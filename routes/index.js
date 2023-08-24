const Router = require('express');
const router = new Router();
const loginRouter = require('./loginRouter');
router.use('/login', loginRouter);

module.exports = router;