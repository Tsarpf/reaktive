import React from 'react';
import { Link } from 'react-router';
import Cycle from 'cycle-react';
import Rx from 'rx';

const List = Cycle.component( 'List', ( ) => {
	return Rx.Observable.just( <div> asdf </div> );
} );

const Clicker = Cycle.component( 'Counter', ( interactions ) => {
	return Rx.Observable.merge(
		interactions.get( 'plus' )
		.map( () => 1 ),

		interactions.get( 'minus' )
		.map( () => -1 )
	)
	.scan( ( acc, i ) => acc + i )
	.startWith( 0 )
	.map( i => {
		return <div>
			<p> { i } </p>
			<button onClick={ interactions.listener( 'plus' ) }> plus one </button>
			<button onClick={ interactions.listener( 'minus' ) }> minus one </button>
		</div>
	} );
} );

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<div> <Link to="/about"> About </Link> </div>
				<div> <Link to="/map"> Map </Link> </div>
				<Clicker />
				<p> </p>
				<p></p>
				<List/>
			</div>
		);
	}
}
