const Router = require('express');
const router = new Router();
const loginController = require('../controllers/loginController');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', loginController.registration);
router.get('/check', authMiddleware, loginController.check);

module.exports = router;
