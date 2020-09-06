const signup = require("./auth/signup");
const login = require("./auth/login");
const {post, getPost} = require('./post');

module.exports = {
	signup,
	login,
	post,
	getPost
};
