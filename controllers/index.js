const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./htmlRoutes');

// http://localhost:5002
router.use('/', htmlRoutes);
// http://localhost:5002/api
router.use('/api', apiRoutes);

module.exports = router;