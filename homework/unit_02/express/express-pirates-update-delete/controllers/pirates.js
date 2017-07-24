//==============================
// REQUIREMENTS
//==============================

var express = require("express");
var router = express.Router();
var pirates = require('../models/pirates.js');

//==============================
// READ
//==============================
//for root pirate page
router.get('/', function(req, res){
	res.render("pirates/index.hbs", {
		pirates: pirates
	});
});


router.get('/new', function(req, res){
	res.render("pirates/new.hbs");
});


//this is for each pirate page
router.get('/:id', function(req, res){
	//grab the pirate by id
	const id = req.params.id;
	var showPirate = pirates[req.params.id];

	res.render("pirates/show.hbs", {
		pirate: showPirate,
		id: id
	});
});


//==============================
// CREATE
//==============================

//==============================
// UPDATE
//==============================
router.get('/:id/edit', (req, res) => {
	const id = req.params.id;
	const pirate = pirates[id];
	res.render('pirates/edit', {
		name: pirates[id].name,
		birthplace: pirates[id].birthplace,
		death_year: pirates[id].death_year,
    	base: pirates[id].base,
		nickname: pirates[id].nickname,
		id: id
	});
})

router.put('/:id', (req, res) => {
	const id = req.params.id;
	const pirate = pirates[id];
	pirate.name = req.body.name;
	pirate.birthplace = req.body.birthplace;
	pirate.death_year = req.body.death_year;
    pirate.base = req.body.base;
	pirate.nickname = req.body.nickname;
	res.method = "GET";
	res.redirect(`/pirates/${id}`);
});

//==============================
// DESTROY
//==============================
router.delete('/:id', (req, res) => {
	pirates.splice(req.params.id, 1);
	res.method = "GET";
	res.redirect('/pirates');
})
//==============================
// EXPORTS
//==============================

module.exports = router;
