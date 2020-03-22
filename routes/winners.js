const express = require('express');
const router = express.Router();

const Winner = require('../schema/Winner');

router.get('/', async (req, res) => {
	try {
		const winners = await Winner.find();
		res.json(winners);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

router.post('/', async (req, res) => {
	const { name, time, date } = req.body;

	try {
		let winner = new Winner({ name, time, date });
		await winner.save();
		res.json(winner);
	} catch (error) {
		console.error(error.message);
		res.status(500).send('Server Error');
	}
});

module.exports = router;
