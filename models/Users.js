var Users = (sequelize, DataTypes) =>
	sequelize.define("Users", {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		name: DataTypes.STRING,
		email: DataTypes.STRING,
		password: DataTypes.STRING,
		address: DataTypes.STRING,
		phone: DataTypes.STRING,
	});

module.exports = Users;
