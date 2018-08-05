const express = require('express');
const dolevController = require('./dolev.controller');

const router = express.Router();
router.get('/', dolevController.getAllDolevs);
router.get('/:dolevId', dolevController.getDolevById);
router.patch('/:dolevId', dolevController.updateDolevStatus);

module.exports = router;
