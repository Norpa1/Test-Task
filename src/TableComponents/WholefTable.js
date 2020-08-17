import React, {Component} from "react";
import TableRow from "./TileOfTable.js";

 
 
function Table({TransactionsArray}) {
    return (
        <div className="table">
            <div className="container position-static">
                {TransactionsArray.map((todo,idx) => {
                    return <TableRow todo={todo} key={todo.id} index={idx}/>;
                }
                )}
            </div>	
        </div>	
    );	
}
 
	
export default Table;

 
