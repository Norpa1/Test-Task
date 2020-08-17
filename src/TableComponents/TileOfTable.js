import React from "react";


export default function TableRow( {todo, index} ) {
    return (
        <div className="container-fluid">
            <div Style="border:0.5px solid #ddd" className="col-3 font-weight-normal">{todo.id}</div>
            <div Style="border:0.5px solid #ddd" className="col-3 font-weight-normal">{todo.value}</div>
            <div Style="border:0.5px solid #ddd" className="col-3 font-weight-normal ">{todo.type}</div>
            <div Style="border:0.5px solid #ddd" className="col-3 font-weight-normal">{todo.date}</div>	 
        </div>
    );
}
