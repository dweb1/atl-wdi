const express = require('express');
const hbs = require('hbs');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({
	extended: true
}));

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'))

const pirateController = require('./controllers/pirates.js');
app.use('/pirates', pirateController)

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log('Server up on port ' + port);
})