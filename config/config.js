var fs = require("fs");
var path = require("path");

const config = {
	development: {
		host: "35.222.255.251",
		user: "paul",
		password: "Faca4390!",
		db: "test-db",
		dialect: "mysql",
		dialectOptions: {
			ssl: {
				ca: fs.readFileSync(path.dirname(__dirname) + "/server-ca.pem"),
				key: fs.readFileSync(path.dirname(__dirname) + "/client-key.pem"),
				cert: fs.readFileSync(path.dirname(__dirname) + "/client-cert.pem"),
			},
		},
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	},
	test: {
		host: "35.222.255.251",
		user: "paul",
		password: "Faca4390!",
		db: "test-db",
		dialect: "mysql",
		dialectOptions: {
			ssl: {
				ca: fs.readFileSync(path.dirname(__dirname) + "/server-ca.pem"),
				key: fs.readFileSync(path.dirname(__dirname) + "/client-key.pem"),
				cert: fs.readFileSync(path.dirname(__dirname) + "/client-cert.pem"),
			},
		},
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	},
	production: {
		host: "35.222.255.251",
		user: "paul",
		password: "Faca4390!",
		db: "test-db",
		dialect: "mysql",
		dialectOptions: {
			ssl: {
				ca: fs.readFileSync(path.dirname(__dirname) + "/server-ca.pem"),
				key: fs.readFileSync(path.dirname(__dirname) + "/client-key.pem"),
				cert: fs.readFileSync(path.dirname(__dirname) + "/client-cert.pem"),
			},
		},
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	},
};

module.exports = config;
