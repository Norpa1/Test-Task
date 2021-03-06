import React, { Component } from 'react' 
import './App.scss';
import Table from "./TableComponents/WholefTable.js"
import data from "./demo_json.json" 
import TableTitle from "./TableComponents/TitleOf.js";

const Filters = ["Доход","Расход","За последний месяц","Более 1000 рублей"]
var NewTrancastionsArray = data.results

function TableFilters (o) { 
 	
	var today = new Date();

	var Condition1 = false
	var Condition2 = false
	var Condition3 = false
	var Condition4 = false
	var WholeCondition = ""

	var ConditionText1 = ' (NewTrancastionsArray[x].type=="Доход") '
	var ConditionText2 = ' (NewTrancastionsArray[x].type=="Расход") '
	var ConditionText3 = ' (ComparableDate.getMonth()==(today.getMonth()-1)) ' 
	var ConditionText4 = ' (NewTrancastionsArray[x].value>1000) '

 	if (o.target.className == "Button") {o.target.setAttribute("class", "ButtonActive")}
	else if (o.target.className == "ButtonActive") {o.target.setAttribute("class", "Button")}

 	var NonActiveFilters = document.getElementsByClassName("Button")
 	var ActiveFilters = document.getElementsByClassName("ButtonActive")

 	NewTrancastionsArray = data.results

 	for (var i=0;i<ActiveFilters.length;i++) {

 	if (ActiveFilters[i].innerHTML == Filters[0]){
 		var Condition1 = true 
 		WholeCondition = WholeCondition +ConditionText1
 	}

 	if (ActiveFilters[i].innerHTML == Filters[1]){ 
 		var Condition2 = true	
		WholeCondition = WholeCondition +ConditionText2
 	}
 
 	if (ActiveFilters[i].innerHTML == Filters[2]) {
 		var Condition3 = true	
		WholeCondition = WholeCondition +ConditionText3
 	}

 	if (ActiveFilters[i].innerHTML == Filters[3]){ 
 		var Condition4 = true	
		WholeCondition = WholeCondition + ConditionText4
 	}
 
 	}

 	WholeCondition = WholeCondition.replace(/\) /g, ')&&').replace(/.$/,"").replace(/.$/,"")
 	if ( Condition1 == true && Condition2 == true) {
 		WholeCondition = WholeCondition.replace('&&' ,'||').replace(WholeCondition[0], WholeCondition[0]+"(").replace('"Расход")','"Расход"))' 	)
 	}

 	var Filter = []
	for (let x=0;x<NewTrancastionsArray.length;x++) {
		var ComparableDate = new Date(NewTrancastionsArray[x].date);
		if (eval(WholeCondition)) { 
			Filter.unshift(NewTrancastionsArray[x])
		}
	}

	NewTrancastionsArray = Filter

	if (ActiveFilters.length == 0) {
 		NewTrancastionsArray = data.results
 	}
 
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
	TableFilter = e =>{
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
		    <div className="row">
				<div onClick={e => this.TableFilter(e)} className="Button" >{Filters[0]}</div>
				<div onClick={e => this.TableFilter(e)} className="Button" >{Filters[1]}</div>
				<div onClick={e => this.TableFilter(e)} className="Button" >{Filters[2]}</div>
				<div onClick={e => this.TableFilter(e)} className="Button" >{Filters[3]}</div>			 
		    </div>
		    <TableTitle/>	 
		</div>
		<div className="Wrapper">
			<Table TransactionsArray={TransactionsArray} />	
		</div>
</div>
	)
}
}

 
export default App;

 
