const router = require("express").Router()
const naivadya= require("../controller/naivaidya")
const naivadyaObj = new naivadya();


router.post('/createNaivadya', naivadyaObj.createNaivadya);
router.post('/getShedule', naivadyaObj.getSchedule);
router.get('/getAllSevekari', naivadyaObj.getAllSevekari);
router.post('/updateNaivadya', naivadyaObj.updateNaivadya);
router.post('/checkUrlResponsiveness', naivadyaObj.checkUrlResponsiveness)

module.exports = router;