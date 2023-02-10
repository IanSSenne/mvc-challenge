const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const User = require("./User");

class Comment extends Model {}

Comment.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		comment_text: {
			type: DataTypes.TEXT,
			allowNull: false,
			validate: {
				len: [1, 100],
			},
		},
		author: {
			type: DataTypes.INTEGER,
			references: {
				model: "user",
				id: "id",
			},
		},
		parent: {
			type: DataTypes.INTEGER,
			references: {
				model: "post",
				id: "id",
			},
		},
	},
	{
		sequelize,
		timestamps: true,
		freezeTableName: true,
		underscored: true,
		modelName: "comment",
	}
);

module.exports = Comment;
