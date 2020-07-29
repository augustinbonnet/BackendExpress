const jwt = require('jsonwebtoken');
const crypto = require('crypto');

var hash = crypto.createHash('sha256');

const username = 'aa4f93e9212a77fa02e30145b2272abdc44dad022a9e37c50e561a3f45d660e3' // tryken sha256
const password = '408f31d86c6bf4a8aff4ea682ad002278f8cb39dc5f37b53d343e63a61f3cc4f' // bruh sha256

exports.login = (req, res, next) => {
	console.log(req.body);

	const postedHashedUsername = crypto.createHash('sha256').update(req.body.username).digest('hex');
	const postedHashedPassword = crypto.createHash('sha256').update(req.body.password).digest('hex'); 

	if ((postedHashedUsername == username) && (postedHashedPassword == password)){
		res.status(200).json({
		auth: true,
		token: jwt.sign(
			{ userId : 'tryken'},
			'RANDOM_SECRET_TOKEN',
			{
				expiresIn: '24h'
			}
		)
	});
	}else {
		res.status(201).json({
		auth: false
	});
	}
}