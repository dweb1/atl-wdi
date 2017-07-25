console.log('tamagotchi file is loaded');

//your class declaration here
class Tamagotchi {
	constructor (name, creatureType) {
		this.foodInTummy = 10;
		this.restedness = 10;
		this.health = 10;
		this.name = name;
		this.creatureType = creatureType		
	}
	cry() {
		this.foodInTummy --;
		console.log(this.foodInTummy);
		console.log("WAHH!" + "- " + this.name);
	}
	puke() {
		this.foodInTummy--;
		console.log("Waaaaaah - " + this.name + " is sick and has " + this.foodInTummy + " food in his tummy");
	}
	yawn() {
		this.restedness--;
		console.log(this.name + " has current restedness of: " + this.restedness);
	}
	start() {
		var self = this;
		this.hungerTime = setInterval(function(){
			self.cry();
		}, 6000);
		this.yawnTimer = setInterval(function(){
			self.yawn();
		}, 10000);
		this.sickTimer = setInterval(function() {
			self.puke();
		}, 20000);
	}
	stop() {
		clearInterval(this)
	}
} 

//create new Tamagotchis
const bill = new Tamagotchi("Bill", "lizard");
bill.start();
bill.stop();

const steve = new Tamagotchi("Steve", "zebra");
steve.start();

const earl = new Tamagotchi("Earl", "possum");
earl.start();

//test out your Tamagotchies below via console.logs
