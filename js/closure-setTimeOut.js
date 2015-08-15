
(function(){
	
	for (var i = 0; i < 5; ++i) {
  setTimeout((function(i){return function () {
    console.log(i + ' ');
  }})(i), 100);
}
})();



(function(){
				for (var i = 0; i < 5; ++i) {
			  setTimeout((function(){return function () {
				console.log(i + ' ');
			  }})(), 1000);
			};
})()