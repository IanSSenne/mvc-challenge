require("dotenv/config");

const express = require("express");
const session = require("express-session");
const sessionConfig = {
	secret: process.env.SESSION_SECRET,
	resave: false,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 7,
	},
};

const app = express();
const port = process.env.PORT || 3000;

app.engine("handlebars", require("express-handlebars").engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session(sessionConfig));

app.use("/", require("./controllers"));

app.listen(port, () => {
	console.log(`Server listening on port ${port}`);
});
