const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	try {
		const token = req.headers.authorization.split(' ')[1];
		const decodedToken = jwt.verify(token, 'RANDOM_SECRET_TOKEN');
		console.log(decodedToken);
		next();

	} catch (error) {
		res.status(401).json({ error: error | 'Requête non authentifiée !'})
	}
};
