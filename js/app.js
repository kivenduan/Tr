
var app=angular.module("app",["ngRoute"]);

var id=null;


app.controller("MainCtrl",["$scope",function(scope){
	scope.webtitle="天荣钱包";
	$(".navinfo ul li").each(function(){
		$(this).click(function(){
			$(this).parent().children().removeClass("on");
			$(this).addClass("on")
		})
	})
}]);

app.constant("Route",{
	wallet:"/wallet",
	select:"/select",
	safecenter:"/safecenter",
	cz:"/cz",
	tx:"/tx",
	cods:"/cods",
	login:"/login",
    setpaw:"/setpaw",
    czcg:"/czcg"
});

app.config(["$routeProvider","Route",function ($routeProvider,Route) {
    $routeProvider
        .when(Route.login,{
            templateUrl:"views/login.html",
            controller:"loginCtrl"
        })
        .when(Route.wallet,{
            templateUrl:"views/wallet.html",
            controller:"walletCtrl"
        })
        .when(Route.select,{
            templateUrl:"views/select.html",
            controller:"selectCtrl"
        })
        .when(Route.safecenter,{
            templateUrl:"views/safecenter.html",
            controller:"safecenterCtrl"
        })
        .when(Route.cz,{
            templateUrl:"views/cz.html",
            controller:"czCtrl"
        })
        .when(Route.czcg,{
            templateUrl:"views/czcg.html",
            controller:"czcgCtrl"
        })
        .when(Route.tx,{
            templateUrl:"views/tx.html",
            controller:"txCtrl"
        })
        .when(Route.cods,{
        	templateUrl:"views/cods.html",
        	controller:"codsCtrl"
        })
        .when(Route.setpaw,{
            templateUrl:"views/Setpaw.html",
            controller:"SetpawCtrl"
        })
        .otherwise({
            redirectTo:Route.login
        })
}]);

//http请求
app.config(function ($httpProvider) {
    $httpProvider.defaults.transformRequest = function (obj) {
        var str = [];
        for(var p in obj){
            str.push(encodeURIComponent(p)+"="+encodeURIComponent(obj[p]));
        }
        return str.join("&");
    };
    //配置angualrjs的请求头
    $httpProvider.defaults.headers.post={
        "Content-Type":"application/x-www-form-urlencoded"
    }
});

app.factory("http",function ($http) {
    var doRquestPost = function (url,data) {
        return $http({
            method:"post",
            url:url,
            data:data
        })
    };
    return{
        getInfo:function (url,data) {
            return doRquestPost(url,data)
        }
    }
});

app.factory("httpget",function ($http) {
    var doRquestGet = function (url) {
        return $http({
            method:"get",
            url:url,
        })
    };
    return{
        getInfo:function (url) {
            return doRquestGet(url)
        }
    }
});