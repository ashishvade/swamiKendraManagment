const router = require("express").Router()
const naivadya= require("../controller/naivaidya")
const naivadyaObj = new naivadya();


router.post('/createNaivadya', naivadyaObj.createNaivadya);
router.post('/getShedule', naivadyaObj.getSchedule);

module.exports = router;