var express = require('express');
var router = express.Router();

var User = require("../models/user");
var Item = require("../models/item");

// USERS INDEX ROUTE
router.get('/', (req, res) => {

	User.find({})
	.then( (users) => {
		res.render('users/index', {
			users: users 
		});
	})
	.catch((error) => {
		console.log(`error!!! ${error}`);
	});
})

router.get('/new', (req, res) => {
	res.render('users/new', {
	});
})

router.post('/', (req, res) => {
	const newUser = new User(req.body);
	newUser.save((error) =>{
		if (error) {
			console.log("ERROR!!! New User not saved!" + error);
		}
		res.render('users/show', {
			user: newUser
		}
	)
})
});

// USER SHOW ROUTE
router.get('/:id', (req, res) => {
	User.findById(req.params.id)
	.then( (user) => {
		res.render('users/show', {
			user: user 
		});
	})
	.catch((error) => {
		console.log(`error!!! ${error}`);
	});
})

// USER CREATE ROUTE


// USER UPDATE ROUTE
router.put('/:id', (req, res) => {

   const userIdToUpdate = req.params.id;
   const updatedUserInfo = req.body;
    
   User.findByIdAndUpdate(
        userIdToUpdate,
        updatedUserInfo,
        { new: true }
    ) 
   		.then((user) => {
        	console.log('User with ID of ' + user._id + ' updated');

       		res.render('users/show', 
       		{ user }
       		)
       	})
        .catch((error) => {
            console.log('Error! User failed to update: ' + error);
            console.log(error);
        })
});

router.get('/:id/delete', (req, res) =>{
	const userIdToDelete = req.params.id;
	User.findByIdAndRemove(userIdToDelete)
	.then(() => {
		console.log(`Successfully deleted user with ID ${userIdToDelete}!`)
		res.redirect('/users');
	})
})

router.get('/:id/edit', (req, res) => {
	const userIdToFind = req.params.id;
	User.findById(userIdToFind)
	.then((user) => {
		console.log(`Successfully edited form for user with ID of ${userIdToFind}`)
		res.render(
			'users/edit', 
			{ user }
		);
	})
	.catch((err) => {
		console.log(`Error rendering edit form for user with ID of ${userIdToFind}`)
	})
});


module.exports = router;
