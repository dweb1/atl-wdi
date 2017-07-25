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
} 

//create new Tamagotchis
const bill = new Tamagotchi("Bill", "lizard");
bill.cry();

const steve = new Tamagotchi("Steve", "zebra");
steve.cry();

const earl = new Tamagotchi("Earl", "possum");
earl.cry();

//test out your Tamagotchies below via console.logs
