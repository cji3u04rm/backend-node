var express = require("express");
var router = express.Router();

const data = [
	{
		id: 1,
		title: "paul test",
	},
	{
		id: 2,
		title: "paul test",
	},
];

/* GET home page. */
// http://localhost:3000/api/product
router.get("/product", function (req, res, next) {

	res.status(200).send({
        success:true,
        data
    });
});

router.post("/product", function (req, res, next) {
    const body = req.body;
    console.log(req.con);

    data.push({...body,id: new Date().getTime()})

	res.status(200).send({
        success:true,
        data
    });
});

router.delete("/product/:id", function (req, res, next) {
    const id = req.params.id;

    const result = data.filter((item)=> item.id != id);

	res.status(200).send({
        success:true,
        result
    });
});

module.exports = router;
