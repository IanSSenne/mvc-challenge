const Sequelize = require("sequelize");

console.log("process.env.JAWSDB", process.env.JAWSDB);
const sequelize = process.env.JAWSDB
	? new Sequelize(process.env.JAWSDB)
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
