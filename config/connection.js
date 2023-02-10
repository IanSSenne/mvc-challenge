const Sequelize = require("sequelize");

const sequelize = process.env.JAWSDB_URL
	? new Sequelize(process.env.JAWSDB_URL)
	: new Sequelize(
			process.env.DB_NAME,
			process.env.DB_USER,
			process.env.DB_PASS,
			{
				dialect: "mysql",
				logging: true,
			}
	  );
module.exports = sequelize;
