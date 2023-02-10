function authenticatedUser(req, res, next) {
	console.log(req.session);
	if (req.session && req.session.logged_in) {
		next();
	} else {
		res.redirect("/login");
	}
}

module.exports = authenticatedUser;
