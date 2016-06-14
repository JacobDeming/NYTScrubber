var React=require("react");
var Router=require('react-router');
var Request=require('axios');

var Results=React.createClass({

	getInitialState: function() {
		return {
			title: "",
			url: "",
			pubdate: ""
		};
	},
	handleClick: function(item, event) {
		this.save(item.headline.main, item.pub_date, item.web_url)
			.then(function(data) {
				console.log(item.web_url);
			}.bind(this));},

	save: function (title, date, url) {
		var newArticle = {
			title: title,
			date: date,
			url: url};
		return Request.post('/save', newArticle).then(function (results) {
			return results._id;});},

	render: function(){
		if(!this.props.results.hasOwnProperty('docs')) {
			return(
				<li className="list-group-item">
					<h3>
						<span><em>Enter search terms to begin...</em></span>
					</h3>
				</li>
			)
		} else {
			var articles = this.props.results.docs.map(function (article, index) {
				return(
					<div key={index}>
						  <li className="list-group-item">
						
							<h3>
							  	<span><em>{article.headline.main}</em></span>
								<span className="btn-group pull-right" >
									<a className="btn btn-default " href={article.web_url} target="_blank">View Article</a>
									<button className="btn btn-primary" onClick={this.handleClick.bind(this, article)}>Save</button>
								</span> 
							</h3>
							<p>Date Published: {article.pub_date.split("T")[0]}</p>
							
						  </li>
					</div>
				);
			}.bind(this));
		}

		return(

		<div className="main-container" >
			<div className="row">
				<div className="col-lg-12">

					<div className="panel panel-primary">
						<div className="panel-heading">
							<h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
						</div>
					</div>

					<div class="panel-body">
						<ul class="list-group">
							{articles}
						</ul>
					</div>

				</div>
			</div>
		</div>

		);
	}
});


module.exports=Results;