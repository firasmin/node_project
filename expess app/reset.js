const express = require('express');

const resetpasswordController = require('./resetpassword');


const router = express.Router();

router.get('/updatepassword/:resetpasswordid', resetpasswordController.updatepassword)

router.get('/resetpassword/:id', resetpasswordController.resetpassword)
router.get('/forgotpassword',resetpasswordController.getemail)

router.post('/forgotpassword', resetpasswordController.forgotpassword)

module.exports = router;