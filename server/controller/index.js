const signup = require("./auth/signup");
const {login,getUsers} = require("./auth/users");
const {post, getPost} = require('./post');
const models = require('../models');

module.exports = {
	signup,
	login,
	getUsers,
	post,
	getPost
};
