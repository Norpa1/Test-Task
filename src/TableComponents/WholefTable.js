import React, {Component} from 'react';
import TableRow from "./TileOfTable.js"
import TileOf from "./TitleOf.js"
 

const TableTitles = ["идентификатор транзакции","сумма транзакции","тип транзакции","дата транзакции"]
 
 
function Table({TransactionsArray}) {
		return (
		<div className="Container">

		<div>
			{TableTitles.map((todo,idx) => {
				return <TileOf todo={todo} key={idx} index={idx}/>
				}
			)}
		</div>

		<div>
			{TransactionsArray.map((todo,idx) => {
				return <TableRow todo={todo} key={todo.id} index={idx}/>
			}
			
			)}
		</div>	
		</div>	
		)	
}
 
	
export default Table;

 