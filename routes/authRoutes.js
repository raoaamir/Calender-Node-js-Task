const { Router } = require('express');
const authController = require('../controllers/authController');

const router = Router();

router.get('/signup', authController.signup);
router.post('/signup', authController.create_user);
router.get('/login', authController.login);
router.post('/login', authController.login_user);
router.get('/logout', authController.logout);

module.exports = router;