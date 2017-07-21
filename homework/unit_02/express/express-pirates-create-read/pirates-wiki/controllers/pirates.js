const express = require("express");
const router = express.Router();
const pirates = require('../models/pirates.js');

router.get('/', (req, res) => {
	res.render('pirates/index.hbs', {
		data: pirates,
	});
});

router.get('/new', (req, res) => {
	res.render('pirates/new.hbs');
});

router.get('/:id', (req, res) => {
	const id = req.params.id;
	res.render('pirates/show.hbs', {
		name: pirates[id].name,
		nickname: pirates[id].nickname,
		birthplace: pirates[id].birthplace,
		base: pirates[id].base,
		deathYear: pirates[id].death_year,
		image_source: pirates[id].image_source
	});
})

router.post('/', (req, res) => {
	const newPirate = {
		name: req.body.name,
		birthplace: req.body.birthplace,
		death_year: req.body.death_year,
		base: req.body.base,
		nickname: req.body.nickname
	};
	pirates.push(newPirate);
	res.redirect('/pirates');
});

module.exports = router;
