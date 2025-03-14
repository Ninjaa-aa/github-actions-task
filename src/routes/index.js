const express = require('express');
const router = express.Router();

/**
 * @route   GET /
 * @desc    Returns a Hello World message
 * @access  Public
 */
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Hello, World!' });
});

module.exports = router; 