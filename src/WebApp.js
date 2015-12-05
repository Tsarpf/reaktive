import Cycle from 'cycle-react';
import React from 'react';  // eslint-disable-line no-unused-vars
import Application from './containers/application';
import createBrowserHistory from 'history/lib/createBrowserHistory';
let Rx = Cycle.Rx;

function computer( interactions ) {
	return Rx.Observable.just( <Application interactions={ interactions } history={ createBrowserHistory() }/> );
}

Cycle.applyToDOM( '#app', computer );

//React.render( <Application history={ createBrowserHistory() }/>, document.getElementById( 'app' ) );
