import React from 'react';
import { Link } from 'react-router';
import Cycle from 'cycle-react';
let Rx = Cycle.Rx;

class Testink extends React.Component {
	render() {
		return <div> Cheers { this.props.test } </div>;
	}
}

let Counter = Cycle.component( 'Counter', () => {
	return Rx.Observable.interval( 1000 ).map( i =>
		<Testink test={ i } />
	);
} );

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<div> <Link to="/about"> About </Link> </div>
				<div> <Link to="/map"> Map </Link> </div>
				<Counter/>
			</div>
		)
	}
}
