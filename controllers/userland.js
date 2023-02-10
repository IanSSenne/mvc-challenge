const Post = require("../models/Post");

const router = require("express").Router();

router.get("/", async (req, res) => {
	const Posts = await Post.findAll();
	res.render("index", {
		session: req.session,
		posts: Posts.map((_) => _.get({ plain: true })),
	});
});

router.get("/login", (req, res) => {
	res.render("login", { session: req.session });
});

router.get("/post", (req, res) => {
	res.render("post", { session: req.session });
});
module.exports = router;
