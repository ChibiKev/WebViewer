const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    title: 'Web Viewer',
    description: 'Viewing The Web Through Another World.',
  });
});

module.exports = router;