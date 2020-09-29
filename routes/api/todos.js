const express = require('express');
const router = express.Router();

// @route GET api/todos
// @desc Test Route
// @access    Public
router.get('/', (req, res) => res.send('Todo route'))


module.exports = router;