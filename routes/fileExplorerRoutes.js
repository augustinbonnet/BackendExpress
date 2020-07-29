const express = require('express');
const fileExplorer = require('../controllers/fileExplorer');
const router = express.Router();

const auth = require('../middlewares/auth');

router.get('/listAllDir', auth, fileExplorer.listAllDir);

module.exports = router;