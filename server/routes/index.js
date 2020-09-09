const express = require("express");
const router = express.Router();

const controller = require('../controller')
const auth = require('../middlewares/auth');

router.get('/', (req, res) => res.send('Hello World!'))

// User Users
router.post('/api/login', controller.login);
router.post('/api/signup', controller.signup);
router.get('/api/getUsers', controller.getUsers);
// User post content
router.post('/api/post', [auth.authenticate, auth.permit("USER")], controller.post);
router.get('/api/getpost', controller.getPost);

module.exports = router;