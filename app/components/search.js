var React=require("react");
var Query=require("./search/query");
var Results=require("./search/results");
var Request=require("axios");

var Router = require('react-router');
var Route = Router.Route;

var Search=React.createClass({

	getInitialState: function(){
		return{
			term:"",
			startYear:"",
			endYear:"",
			results:{},}},

	search: function(term,startYear,endYear){
		console.log("Got in here");
		var term=term.trim();
		var startYear=startYear.trim()+"0101";
		var endYear=endYear.trim()+"1231";
		return Request.get('https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=9f7b37b4e7ef4fa4a00b3e316e9fa72a',{
			params:{
				q: term,
				begin_date: startYear,
				end_date: endYear,}}).then(function(res){
					return res.data.response;});},

	componentDidUpdate: function(prevProps, prevState){
		if(this.state.term!="" && (prevState.term!=this.state.term || prevState.startYear!=this.state.startYear || prevState.endYear!=this.state.endYear)){
			this.search(this.state.term,this.state.startYear,this.state.endYear).then(function(articles){
				if(articles!=this.state.results){
					this.setState({
						results: articles});}}.bind(this));}},

	updateSearch: function(term,startYear,endYear){
		this.setState({term:term,startYear:startYear,endYear:endYear});
	},

	render: function(){
		return (
			<div className="blah">
				<Query updateSearch={this.updateSearch} />
				<Results results={this.state.results} />
			</div>
			)
		}
	})

module.exports=Search;