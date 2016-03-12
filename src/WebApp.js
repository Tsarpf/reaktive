import Cycle from 'cycle-react';
import ReactDOM from 'react-dom';
import React from 'react';  // eslint-disable-line no-unused-vars
import Application from './containers/application';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import Rx from 'rx';

const Main = Cycle.component( 'Main', function computer( interactions ) {
	return Rx.Observable.just( <Application interactions={ interactions } history={ createBrowserHistory() }/> );
} );

//ReactDOM.render.applyToDOM( '#app', computer );
ReactDOM.render( <Main />, document.querySelector( '#app' ) );
