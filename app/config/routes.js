var React = require('react');

var Main = require('../components/main');
var Search = require('../components/search');
var Saved = require('../components/saved');

var Router = require('react-router');
var Route = Router.Route;

var IndexRoute=Router.IndexRoute

module.exports = (
	<Route path="/" component={Main}>
		<Route path='Search' component={Search} />
		// <Route path='Saved' component={Saved} />

		<IndexRoute componnent={Search} />
	</Route>);