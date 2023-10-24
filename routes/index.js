const Router = require('express');
const router = new Router();
const loginRouter = require('./loginRouter');
const announceRouter = require('./announceRouter');
const fileRouter = require('./fileRouter');
router.use('/login', loginRouter);
router.use('/announce', announceRouter);
router.use('/files', fileRouter);

module.exports = router;