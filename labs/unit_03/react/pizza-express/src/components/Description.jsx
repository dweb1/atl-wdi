import React, { Component } from 'react';
import myImage from '../images/pizzaoven.jpg';

class Description extends Component {
	render () {
		return (
			<div className="description" id="description">
				<img src={myImage} />
				<p>Hes not a war hero. Hes a war hero because he was captured. I like people that werent captured, OK, I hate to tell you. One of the key problems today is that politics is such a disgrace. Good people don’t go into government.A certificate of live birth is not the same thing by any stretch of the imagination as a birth certificate.The wall will go up and Mexico will start behaving.The U.S. will invite El Chapo, the Mexican drug lord who just escaped prison, to become a U.S. citizen because our leaders can't say no!</p>
			</div>
		);
	}
}

export default Description;