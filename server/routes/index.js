const express = require("express");
const router = express.Router();

const controller = require('../controller')
const auth = require('../middlewares/auth');

router.get('/', (req, res) => res.send('Hello World!'))

// User login
router.post('/api/login', controller.login);
router.post('/api/signup', controller.signup);
// User post content
router.post('/api/post', [auth.authenticate, auth.permit("USER")], controller.post);
router.get('/api/getPost', controller.getPost);

module.exports = router;