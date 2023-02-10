require("dotenv").config("../.env");
const sequelize = require("../config/connection");
const { User, Comment, Post } = require("../models");
const { faker } = require("@faker-js/faker");
let users = [];
sequelize.sync({ force: true }).then(async () => {
	const posts = [];

	async function createUser() {
		const userData = {
			email: faker.internet.email(),
			password: faker.internet.password(),
			name: faker.internet.userName(),
		};
		users.push(userData);
		const user = await User.create(userData);

		let myPosts = [];
		for (let i = 0; i < 10; i++) {
			myPosts.push(
				await Post.create({
					title: faker.lorem.words(3),
					content: faker.lorem.paragraph(),
					user_id: user.id,
				})
			);
		}
		if (posts.length) {
			for (let i = 0; i < 10; i++) {
				let target = posts[Math.floor(Math.random() * posts.length)];

				await Comment.create({
					comment_text: faker.lorem.sentence(),
					post_id: target.id,
					user_id: user.id,
				});
			}
		}
		posts.push(...myPosts);

		return user;
	}
	for (let i = 0; i < 10; i++) {
		await createUser();
	}
	require("fs").writeFileSync("./users.json", JSON.stringify(users));
});
