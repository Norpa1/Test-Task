import React from 'react';
import data from "../demo_json.json" 
import App from "../App.js"
import Transaction from "./Generate_JSON_Content.js"


var NewTrancastionsArray = data.results
 

function TableFilters(o) {
	 
 	if (o.target.className == "Button") {o.target.setAttribute("class", "ButtonActive")}
	else if (o.target.className == "ButtonActive") {o.target.setAttribute("class", "Button")}

	if (o.target.innerHTML == "Доход") {

 		var IncomesID = []
		for (let x=0;x<NewTrancastionsArray.length;x++) {
			 
			if (NewTrancastionsArray[x].type == "Доход") {
				IncomesID.unshift(NewTrancastionsArray[x])
			}
			if (NewTrancastionsArray[x].type != "Доход") {
				IncomesID.push(NewTrancastionsArray[x])
			}
	}
	NewTrancastionsArray = IncomesID

}

	if (o.target.innerHTML == "Расход") {
 		var ExtenseID = []
		for (let x=0;x<NewTrancastionsArray.length;x++) {
			if (NewTrancastionsArray[x].type == "Расход") {
				ExtenseID.unshift(NewTrancastionsArray[x])
			}

			if (NewTrancastionsArray[x].type != "Расход") {
				ExtenseID.push(NewTrancastionsArray[x])
			}
	}

	NewTrancastionsArray = ExtenseID
	}

	if (o.target.innerHTML == "За последний месяц") {

		var LastMonthID = []
		var today = new Date();

		for (let x=0;x<NewTrancastionsArray.length;x++) {
			var ComparableDate = new Date(NewTrancastionsArray[x].date);

			if (ComparableDate.getMonth() == (today.getMonth()-1) )  {
				LastMonthID.unshift(NewTrancastionsArray[x])
			}

			if ( ComparableDate.getMonth() !=  (today.getMonth()-1) ) {
				LastMonthID.push(NewTrancastionsArray[x])
			}


		}
			NewTrancastionsArray = LastMonthID
	}

	if (o.target.innerHTML == "Более 1000 рублей") {
		var MoreThanID = []
 
		for (let x=0;x<NewTrancastionsArray.length;x++) {
			if (NewTrancastionsArray[x].value > 1000) {
			 

			MoreThanID.unshift(NewTrancastionsArray[x])
		}

		if (NewTrancastionsArray[x].value < 1000) {
			MoreThanID.push(NewTrancastionsArray[x])
		}

	}
 	NewTrancastionsArray = MoreThanID
	}
	console.log(NewTrancastionsArray)
	 
}



 function Button( {todo, index} ) {
  
	return (
		<div onClick={TableFilters} className="Button" >{todo}</div>
		)
 
  	}


 export default Button;
 

 

 