function kiloSeparator(num)
{
	"use strict";
	var str;
	//var arr=num.toString().split('.')
	str=num.toString().replace(/(\d)(?=(\d{3})+$)/g,"$1,");
	
	return str;
	
}



console.log(kiloSeparator(1346545.2345456));
console.log(kiloSeparator(545.23));
console.log(kiloSeparator(5.3));
console.log(kiloSeparator(45.23));
console.log(kiloSeparator(45.2313212));
console.log(kiloSeparator(213445));
console.log(kiloSeparator(0.213445));
