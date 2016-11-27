app.controller("selectCtrl",["$scope","httpget",function(scope,httpget){
	
	httpget.getInfo("http://127.0.0.1/ajax/Angular/Tr/php/trinfo.php").success(function(data){
		console.log(data);
		scope.jyxxs=data.reverse();
		
	});
}])