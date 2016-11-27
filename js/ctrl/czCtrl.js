app.controller("czCtrl",function($scope){
	$("#zffas p").on("click",function(){
		$(this).parent().children().css({backgroundPositionY: "0"});
		$(this).css({backgroundPositionY: "-22px"});
		console.log(this);
	});
	$("#pay").click(function(){
		var czje=$("#czje input").val();
		//console.log(czje);
		if(czje==""){
			$("#czje span").hide();
		}else{
			$("#czje span").show();
			$.ajax({
				type:"post",
				url:"http://127.0.0.1/ajax/Angular/Tr/php/addinfo.php",
				async:true,
				dataType:"json",
				data:{
					czje:czje
				},
				success:function(data){
					if(data=="succes"){
						window.location.href="http://127.0.0.1/ajax/Angular/Tr/index.html#/czcg";
					};
				}
			});
		}
	})
	
})