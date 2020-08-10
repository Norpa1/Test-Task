import React from 'react';

 

var TransactionsArray = [] 	//	When its generates itself =/
var AmountOfTranscations = 10	
var TypeOfTransaction = ["Расход","Доход"]



function GenerateRandomID()   {   
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        
        for ( var i = 0; i < 10; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength)); }
        return result;

}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function Transaction(id, value, type, date) {
  this.id = id;
  this.value = value;
  this.type = type;
  this.date = date;
}

function GenerateTransactionList(TransactionsAmount) {

	for (var i=0;i<TransactionsAmount;i++) {
		
		var NewTransaction = new Transaction(GenerateRandomID(),
			Math.floor(Math.random()*5000),
			TypeOfTransaction[Math.floor(Math.random()*TypeOfTransaction.length)],
			randomDate(new Date(2015, 0, 1), new Date()).toString())

		let formattedJson = JSON.stringify(NewTransaction, null, 4);
	//	document.body.innerHTML += `<pre>${formattedJson},</pre>`
		TransactionsArray.push(formattedJson)
	}

	localStorage.setItem('testObject', TransactionsArray);
	var retrievedObject = localStorage.getItem('testObject');
	//GenerateResultsTable(retrievedObject)

}

GenerateTransactionList(AmountOfTranscations)


 
 