var React = require('react');
var Router = require('react-router');
var Request = require('axios');

var Saved = React.createClass({
	getInitialState: function() {
        return {
            articles:[]
        };
    },

    find: function() {
        return Request.get('/fetch').then(function(results) {
            return results.data;
        })
    },

    delete: function(title, date, url) {
        return Request.post('/delete', {
            title: title,
            date: date,
            url: url})
    },

    handleClick: function(clickData, event) {
		this.delete(clickData.title, clickData.date, clickData.url);
    console.log(this);
		this.find().then(function(article){
			this.setState({
    			articles:article
			})
		}.bind(this));
	},

    componentDidMount: function(){
    	this.find().then(function (article){
    		this.setState({
    			articles:article
    		})
    	}.bind(this))
    },

    render: function(){
    	var articles = this.state.articles.map(function (article, index) {
    		console.log(article);
    		return(
				<div key={index}>
					<li className="list-group-item">
						<h3>
							<span><em>{article.title}</em></span>
								<span className="btn-group pull-right" >
									<a className="btn btn-default " href={article.url} target="_blank">View Article</a>
									<button className="btn btn-primary" onClick={this.handleClick.bind(this, article)}>Delete</button>
								</span> 
							</h3>
							<p>Date Published: {article.date}</p>
						  </li>
					</div>)}.bind(this))
			return(

		<div className="main-container" >
			<div className="row">
				<div className="col-lg-12">

					<div className="panel panel-primary">
						<div className="panel-heading">
							<h1 className="panel-title"><strong><i className="fa fa-list-alt"></i>  Results</strong></h1>
						</div>
					</div>

					<div className="panel-body">
						<ul className="list-group">
							{articles}
						</ul>
					</div>

				</div>
			</div>
		</div>

		);
	}
});

module.exports = Saved;