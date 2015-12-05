import React from 'react';
import { Link } from 'react-router';
import Cycle from 'cycle-react';
import { DOM } from 'rx-dom';
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

let List = Cycle.component( 'List', () => {
	return DOM.getJSON( 'http://tsatter.com/backlog/?channel=%23misc&count=20' )
	.startWith( [ { message: 'Loading' } ] )
	.map( ses => {
		var elems = ses.map( line => {
			return <div> { line.message } </div>
		} );
		return <div> { elems } </div>;
	} );
} );

export default class Home extends React.Component {
	render() {
		return (
			<div>
				<div> <Link to="/about"> About </Link> </div>
				<div> <Link to="/map"> Map </Link> </div>
				<Counter/>
				<List/>
			</div>
		)
	}
}
