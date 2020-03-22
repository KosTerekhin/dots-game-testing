const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	const gameSettings = {
		easyMode: { field: 5, delay: 2000 },
		normalMode: { field: 10, delay: 1000 },
		hardMode: { field: 15, delay: 900 }
	};

	res.json(gameSettings);
});

module.exports = router;
