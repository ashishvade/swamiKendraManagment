var express = require('express');
var router = express.Router();
const naivadya = require("./naivadyaRoute")

/* GET home page. */
router.get('/', (req, res) => {
  throw new Error();
})

router.get('/route1', function (req, res, next) {
  res.send("Hello Route1");
});

router.use("/naivadya", naivadya);




module.exports = router;
