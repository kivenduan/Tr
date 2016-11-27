app.controller("walletCtrl",["$scope","httpget",function(scope,httpget){
	httpget.getInfo("http://127.0.0.1/ajax/Angular/Tr/php/username.php?id=2").success(function(data){
		scope.username=data.username;
		scope.money=data.money;
		scope.usemoney=data.usemoney;
		scope.tx=data.tx;	
	});
	$(".usermoney span").click(function(){
		
		$(".personInfo i").toggle();
	})
	httpget.getInfo("http://127.0.0.1/ajax/Angular/Tr/php/trinfo.php").success(function(data){
		
		scope.jyxxs=data.reverse().splice(0,5);
		
	})
	
}])