// 'use strict' => to prevent spelling errors and create unnecessarily new variables

var priceOfPhone = 42000, bankBalance = 60000;
console.log("---- if else ----");
if(priceOfPhone < bankBalance){
	console.log("priceOfPhone is lesser than bankBalance");
	console.log("Transaction Successful");
} else if(priceOfPhone > bankBalance){
	console.log("priceOfPhone is greater than bankBalance");
	console.log("Transaction Failed. Insufficient Bank Balance");
} else {
	console.log("Network Error. Low Signal");
	console.log("Transaction Failed");
}
console.log("Transaction Process Done");

console.log("---- switch case ----");
var chocolate = "Dairy Milk", quantity;
switch( chocolate ){
	case "Dairy Milk":
		quantity = 5;
		break;
	case "Hersheys":
		quantity = 50;
		break;
	case "Toblerone":
		quantity = 1;
		break;
	default:
		quantity = 2;
}
console.log("quantity = ", quantity);