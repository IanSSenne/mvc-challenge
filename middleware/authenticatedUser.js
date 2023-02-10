function authenticatedUser(req, res, next) {
	if (req.session && req.session.logged_in) {
		next();
	} else {
		console.log(req.session);
		res.redirect("/login");
	}
}

module.exports = authenticatedUser;
