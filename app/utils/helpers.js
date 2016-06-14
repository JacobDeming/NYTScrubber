	
	find: function(){
		return Request.get('/api/saved').then(function(results){
			return results;});},

	post: function (title,date,url){
		var newArticle={
			title: title,
			date: date,
			url: url};
		return Request.post('/api/saved',newArticle).then(function (results){
			return results._id;});},

	delete: function (title,data,url){
		return Request.delete('/api/saved',{
			params:{
				title: title,
				data: data,
				url: url}}).then(function (results){
			return results;});},