var React=require("react");

var Main=React.createClass({
	render: function(){
		return (
			<div className="blah">
			<div className="container">
			<nav className="navbar navbar-default" role="navigation">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
						<span className="sr-only">Toggle navigation</span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>
					<a className="navbar-brand" href="#">NYT-React</a>
				</div>
				<div className="collapse navbar-collapse navbar-ex1-collapse">
					<ul className="nav navbar-nav navbar-right">
						<li><a href="#/Search">Search</a></li>
						<li><a href="#/Saved">Saved Articles</a></li>
					</ul>
				</div>
			</div>
			</nav>
			<div className="jumbotron">
				<h2 className="text-center"><strong>New York Times Article Scrubber</strong></h2>
				<h3 className="text-center">Search for and save articles of interest.</h3>
			</div>
			<div className="container">
				{this.props.children}
			</div>
			</div>
			</div>
		)
	}
})

module.exports=Main;