var express = require("express");
var router = express.Router();
var db = require("../models");
var User = db.Users

/* GET home page. */
// http://localhost:3000/api/user
router.get("/user", async function (req, res, next) {
	const a = await User.findAll();

	res.status(200).send({
		success: true,
		data: a,
	});
});

router.post("/user", async function (req, res, next) {
	const body = req.body;
	console.log("first", body);

	const a = await User.create({ ...body });

	console.log("test", a);

	res.status(200).send({
		success: true,
		a,
	});
});

router.delete("/user/:id", function (req, res, next) {
	const id = req.params.id;

	const result = data.filter((item) => item.id != id);

	res.status(200).send({
		success: true,
		result,
	});
});

module.exports = router;
