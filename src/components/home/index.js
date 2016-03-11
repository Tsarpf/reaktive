import React from 'react';
import { Link } from 'react-router';
import Cycle from 'cycle-react';
let Rx = Cycle.Rx;

class Testink extends React.Component {
	render() {
		return <div> Cheers { this.props.test } </div>;
	}
}

let Clicker = Cycle.component( 'Counter', ( interactions ) => {
	return Rx.Observable.merge(
		interactions.get( 'plus' )
		.map( () => 1 ),

		interactions.get( 'minus' )
		.map( () => -1 )
	)
	.scan( 0, ( acc, i ) => acc + i )
	.startWith( 0 )
	.map( i => {
		return <div>
			<p> { i } </p>
			<button onClick={ interactions.listener( 'plus' ) }> plus one </button>
			<button onClick={ interactions.listener( 'minus' ) }> minus one </button>
		</div>
	} );
} );

let Counter = Cycle.component( 'Counter', ( ) => {
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
				<Clicker/>
				<p/>
				<Counter/>
			</div>
		);
	}
}
