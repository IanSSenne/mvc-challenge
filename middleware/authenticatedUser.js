function authenticatedUser(req, res, next) {
	if (req.session && req.session.is_authenticated) {
		next();
	} else {
		res.redirect("/login");
	}
}

module.exports = authenticatedUser;
