
require(['promise'],function(){
	
	console.log("-----------callback------------------");
	setTimeout(function(){
		console.log("1");		
		setTimeout(function(){
			console.log("2");		
			setTimeout(function(){
				console.log("3");
			},1000)
		},1000)
	},1000)
	
	console.log("-----------promise------------------");
	
	var L=
	{
		setTimeout:function (time)
		{
		    return new Promise(function(resolve,reject){
				setTimeout(function(){
				   resolve();//调用的方式
				},time)			
			});
			
		}
	}
	
	L.setTimeout(1000).then(function(){
		console.log("5");})
		.then(function(){return L.setTimeout(1000)})//定义
		.then(function(){
		    console.log("6");})
		.then(function(){return L.setTimeout(1000)})
		.then(function(){
		    console.log("7");});
	
	
	
	
	
})