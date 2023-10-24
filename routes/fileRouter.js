const Router = require('express');
const router = new Router();
const fileController = require('../controllers/fileController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware, fileController.save);
router.get('/:filename', fileController.get);
router.get('/', fileController.getAll);
router.delete('/:filename', authMiddleware, fileController.delete);

module.exports = router;
