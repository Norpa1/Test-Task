import React, { Component } from 'react';
import './App.scss';
import Table from "./TableComponents/WholefTable.js"
import TableRow from "./TableComponents/TileOfTable.js"
import data from "./demo_json.json"


const Filters = ["Доход","Расход","За последний месяц","Более 1000 рублей"]
var NewTrancastionsArray = data.results


function TableFilters(o) {
 
	var today = new Date();

	var Condition1 = false
	var Condition2 = false
	var Condition3 = false
	var Condition4 = false
	var WholeCondition = ""

 	if (o.target.className == "Button") {o.target.setAttribute("class", "ButtonActive")}
	else if (o.target.className == "ButtonActive") {o.target.setAttribute("class", "Button")}

 	var NonActiveFilters = document.getElementsByClassName("Button")
 	var ActiveFilters = document.getElementsByClassName("ButtonActive")

 	for (var i=0;i<ActiveFilters.length;i++) {

 	if (ActiveFilters[i].innerHTML == Filters[0]) {
 		var Condition1 = true 
 		WholeCondition = WholeCondition +' (NewTrancastionsArray[x].type=="Доход") ' 
 	}

 	if (ActiveFilters[i].innerHTML == Filters[1]) {
 		var Condition2 = true	
		WholeCondition = WholeCondition +' (NewTrancastionsArray[x].type=="Расход") ' 
 	}
 	if (ActiveFilters[i].innerHTML == Filters[2]) {
 		var Condition3 = true	
		WholeCondition = WholeCondition +' (ComparableDate.getMonth()==(today.getMonth()-1)) ' 
 	}
 	if (ActiveFilters[i].innerHTML == Filters[3]) {
 		var Condition4 = true	
		WholeCondition = WholeCondition + " NewTrancastionsArray[x].value>1000 "
 	}

 	}
 
 	WholeCondition = WholeCondition.replace(/\) /g, ')&&').replace(/.$/,"").replace(/.$/,"")
 
 		var Filter = []
		for (let x=0;x<NewTrancastionsArray.length;x++) {
			var ComparableDate = new Date(NewTrancastionsArray[x].date);
			if (eval(WholeCondition)) { 
				Filter.unshift(NewTrancastionsArray[x])
			}
			else {
				Filter.push(NewTrancastionsArray[x])
			}
	}
	NewTrancastionsArray = Filter
	return NewTrancastionsArray
}



class App extends React.Component {
 	
	constructor() {
		super();

		this.state = {
			TransactionsArray:data.results,
			isShow:false
		}
	}

	TableFilter=(e)=>{
 
		this.setState({
      		TransactionsArray: TableFilters(e),
      		isShow:false
    	})
	}
	 
 	render() {
 	let TransactionsArray = this.state.TransactionsArray
	return (
    <div className='TABLEcontainer'> 
		<div className="Wrapper">
			<Table TransactionsArray={TransactionsArray} />	
			<div>
				<div onClick={e => this.TableFilter(e)} className="Button" >{Filters[0]}</div>
				<div onClick={e => this.TableFilter(e)} className="Button" >{Filters[1]}</div>
				<div onClick={e => this.TableFilter(e)} className="Button" >{Filters[2]}</div>
				<div onClick={e => this.TableFilter(e)} className="Button" >{Filters[3]}</div>			 
			</div>

		</div>
	</div>

	)
}
}


export default App;

 