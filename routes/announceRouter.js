const Router = require('express');
const router = new Router();
const announceController = require('../controllers/announceController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/:id', authMiddleware, announceController.save);
router.get('/:id', announceController.get);

module.exports = router;