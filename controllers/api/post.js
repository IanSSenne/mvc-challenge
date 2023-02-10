const route = require("express").Router();

const authenticatedUser = require("../../middleware/authenticatedUser");
const { Post, User, Comment } = require("../../models");

route.post("/comment", authenticatedUser, async (req, res) => {
	const { comment_text, post_id } = req.body;
	await Comment.create({
		comment_text,
		post_id,
		user_id: req.session.user_id,
	});
	res.status(200).end();
});

route.delete("/:id", authenticatedUser, async (req, res) => {
	const post = await Post.findByPk(req.params.id);
	console.log(post, req.session);
	if (post.user_id === req.session.user_id) {
		await post.destroy();
		res.status(200).end();
	} else {
		res.status(403).end();
	}
});

route.put("/:id", authenticatedUser, async (req, res) => {
	const post = await Post.findByPk(req.params.id);
	if (post.user_id === req.session.user_id) {
		await post.update({
			title: req.body.title,
			content: req.body.body,
		});
		res.status(200).end();
	} else {
		res.status(403).end();
	}
});

route.post("/", authenticatedUser, async (req, res) => {
	const { title, body } = req.body;
	await Post.create({
		title,
		content: body,
		user_id: req.session.user_id,
	});
	res.status(200).end();
});
module.exports = route;
