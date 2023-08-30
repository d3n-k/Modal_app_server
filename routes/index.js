const Router = require('express');
const router = new Router();
const loginRouter = require('./loginRouter');
const announceRouter = require('./announceRouter');
router.use('/login', loginRouter);
router.use('/announce', announceRouter);

module.exports = router;