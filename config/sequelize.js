const Sequelize = require("sequelize");

const sequelize = process.env.JAWSDB
	? new Sequelize(process.env.JAWSDB)
	: new Sequelize(
			process.env.DB_NAME,
			process.env.DB_USER,
			process.env.DB_PASS,
			{
				dialect: "mysql",
				logging: false,
			}
	  );

module.exports = sequelize;
