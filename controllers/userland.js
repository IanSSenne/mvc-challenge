const authenticatedUser = require("../middleware/authenticatedUser");
const { Post, User, Comment } = require("../models");

const router = require("express").Router();

router.get("/", async (req, res) => {
	const Posts = await Post.findAll({
		include: [User],
	});

	res.render("index", {
		session: req.session,
		posts: Posts.map((_) => _.get({ plain: true })),
	});
});

router.get("/login", (req, res) => {
	res.render("login", { session: req.session });
});

router.get("/dashboard", authenticatedUser, async (req, res) => {
	const Posts = await Post.findAll({
		include: [
			{
				model: User,
				attributes: ["id", "name"],
			},
		],
	});

	res.render("dashboard", {
		session: req.session,
		posts: Posts.map((_) => _.get({ plain: true })),
	});

	res.render("dashboard", { session: req.session });
});

router.get("/post/:id", async (req, res) => {
	const post = await Post.findByPk(req.params.id, {
		include: [
			{
				model: User,
				attributes: ["id", "name"],
			},
			{
				model: Comment,
				attributes: ["id", "comment_text", "user_id", "post_id"],
				include: [{ model: User, attributes: ["id", "name"] }],
			},
		],
	});
	res.render("post", {
		session: req.session,
		post: post.get({ plain: true }),
	});
});

module.exports = router;
