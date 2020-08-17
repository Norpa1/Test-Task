import React from "react";


const TableTitles = ["идентификатор транзакции","сумма транзакции","тип транзакции","дата транзакции"]
 
export default function TableTitle() {
    return (
        <div className="container">
            <div className="container-fluid">
                {TableTitles.map((todo,idx) => {
                    return <TileOf todo={todo} key={idx} index={idx}/>;
                }
                )}
            </div>
        </div>
    );
}


function TileOf( {todo, index} ) {
    return (
        <div Style="background-color:#C84C41; font:25px verdana; border:0.5px solid #ddd; color:white" className="text-center col-3">{todo}</div>
    );
}
