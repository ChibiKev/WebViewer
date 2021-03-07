const express = require('express');
const router = express.Router();

// Load each controller
const viewController = require('./view.js');
const findController = require('./find.js');
const userCheckController = require('./userCheck.js');
const appConfigController = require('./appConfig.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/view', viewController);
router.use('/find', findController);
router.use('/userCheck', userCheckController);
router.use('/application-configuration', appConfigController);

module.exports = router;