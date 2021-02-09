const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    title: 'Viewer',
    description: 'A Scalping Bot',
  });
});

module.exports = router;