const express = require('express');
const dolevController = require('./dolev.controller');

const router = express.Router();
router.get('/', dolevController.getAllDolevs);
router.get('/:dolevId', dolevController.getDolevById);


module.exports = router;
