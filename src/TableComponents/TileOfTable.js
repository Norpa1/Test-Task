import React from 'react';


export default function TableRow( {todo, index} ) {
	return (
		<div>
		<div className="TableTile">{todo.id}</div>
		<div className="TableTile">{todo.value}</div>
		<div className="TableTile">{todo.type}</div>
		<div className="TableTile">{todo.date}</div>	 
		 
		</div>
		)
}