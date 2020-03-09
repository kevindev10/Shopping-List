//import {without} from 'lodash';
var _ = require('lodash');
//console.log (without);
//console.log(_);
var array = [1,2,3,4,5,6,7,8,9];
console.log('answer:',_.without(array,6));


var input =document.getElementById("userinput");
var button =document.getElementById("enter");
var ul  =document.querySelector("ul");


button.addEventListener("click",function(){
	if(input.value.length > 0){
		var li =document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";

	}
	
})