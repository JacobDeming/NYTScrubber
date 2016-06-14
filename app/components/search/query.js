var React=require("react");

var Query=React.createClass({
	updateSearch(){
		// this.search(this.refs.term.value,this.refs.startYear.value,this.refs.endYear.value);
	},

	getInitialState: function(){
		return{
			term:"",
			startYear:"",
			endYear:"",
		}
	},

	handleSubmit:function(){
		this.props.updateSearch(this.refs.term.value,this.refs.startYear.value,this.refs.endYear.value);},

	render: function(){
		return (
			<div className="blah">
				<div className="row">
					<div className="col-lg-12">
						<div className="panel panel-primary">
							<div className="panel-heading">
								<h1 className="panel-title"><strong><i className="fa fa-newspaper-o" aria-hidden="true"></i>  Query</strong></h1>
							</div>
							<div className="panel-body">
								<form>
									<div className="form-group">
										<h4 className=""><strong>Topic</strong></h4>
										<input type="text" ref="term" className="form-control " id="search_topic" onChange={(e)=>{this.updateSearch()}} />
										<h4 className=""><strong>Start Year</strong></h4>
										<input type="text" ref="startYear" className="form-control " id="search_start" onChange={(e)=>{this.updateSearch()}} />
										<h4 className=""><strong>End Year</strong></h4>
										<input type="text" ref="endYear" className="form-control " id="search_end" onChange={(e)=>{this.updateSearch()}} />
									</div>
									<div className="pull-right">
										<button type="button" className="btn btn-danger" onClick={(e)=>this.handleSubmit()}><h4>Submit</h4></button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			)
		}
	})

module.exports=Query;