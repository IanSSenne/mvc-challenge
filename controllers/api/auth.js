const { User } = require("../../models");

const route = require("express").Router();
const bcrypt = require("bcrypt");

route.post("/signup", async (req, res) => {
	const email = req.body.email;

	const existingUser = await User.findOne({ where: { email } });

	if (existingUser) {
		return res
			.status(400)
			.json({ message: "An account already exists with this email" });
	}

	const user = await User.create({
		name: req.body.name,
		password: req.body.password,
		email: req.body.email,
	});

	req.session.save(() => {
		req.session.user_id = user.id;
		req.session.logged_in = true;
		res.status(200).end();
	});
});

route.post("/login", async (req, res) => {
	const email = req.body.email;

	const user = await User.findOne({ where: { email } });

	if (!user) {
		return res
			.status(400)
			.json({ message: "No account exists with this email" });
	}

	const validPassword = await bcrypt.compare(req.body.password, user.password);

	if (!validPassword) {
		return res.status(400).json({ message: "Incorrect password" });
	}

	req.session.save(() => {
		req.session.user_id = user.id;
		req.session.logged_in = true;
		res.status(200).end();
	});
});

route.post("/logout", (req, res) => {
	req.session.destroy(() => {
		res.status(200).end();
	});
});

module.exports = route;
