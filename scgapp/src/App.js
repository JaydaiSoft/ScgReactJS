import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './components/Nav'
import Transaction from './components/TransactionImport'
import NumberSeries from './components/NumberSeries'
import GoogleSearch from './components/GoogleSearch'
import LineNotify from './components/LineNotify'
import NotFound from './components/NotFound';
import Home from './components/Home';
import './App.css';

class App extends Component {


	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="App">
				<Router basename="/SCG">
					<div>
						<Nav />
						<Switch>
							<Route path="/home" component={Home} />
							<Route path="/numberseries" component={NumberSeries} />
							<Route path="/googlesearch" component={GoogleSearch} />
							<Route path="/linenotify" component={LineNotify} />
							<Route path="/Transaction" component={Transaction} />
							<Route component={Home} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default App;
