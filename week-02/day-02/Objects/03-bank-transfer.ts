'use strict';

const accounts: any[] = [
  { clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
  { clientName: 'Vladimir', accountNumber: 43546731, balance: 5204100071.23 },
  { clientName: 'Sergei', accountNumber: 23456311, balance: 1353600.0 }
];

// Create function that returns the name and balance of cash on an account in a list
// getNameAndBalance(11234543);
// should return: ['Igor', 203004099.2]
// Create function that transfers an amount of cash from one account to another
// it should have four parameters:
//  - the accounts
//  - from accountNumber
//  - to accountNumber
//  - amount of cash to transfer
//
// Log "404 - account not found" if any of the account numbers don't exist to the console.
// transferAmount(accounts, 43546731, 23456311, 500.0);
//After printing the "accounts" it should look like:
// const accounts = [
//	{ clientName: 'Igor', accountNumber: 11234543, balance: 203004099.2 },
//	{ clientName: 'Vladimir', accountNumber: 43546731, balance: 5204099571.23 },
//	{ clientName: 'Sergei', accountNumber: 23456311, balance: 1354100.0 }
//]

let accountOwner = [];
function getNameAndBalance(accNr: number) {
  for (let i: number = 0; i < accounts.length; i++) {
    if (accNr === (accounts[i].accountNumber)) {
      accountOwner.push(accounts[i].clientName, accounts[i].balance);
    }
  } return accountOwner
}
console.log(getNameAndBalance(11234543));


let list = [];
let from = [];
let to = [];
let cash = [];
function transferAmount(list: any, from: any, to: any, cash: any) {
  for (let i: number = 0; i < list.length; i++) {
    if (from.indexOf(list[i].from) != -1) {
      return i;
    } else {
      return '404 - account not found';
    }
  }
  for (let j: number = 0; j < list.length; j++) {
    if (to.indexOf(list[j].to) != 0) {
      return to
    } else {
      return '404 - account not found';
    }
    let newbalance =list[j].balance + cash;
    list[j].balance.assign(newbalance);
  }
}
transferAmount(accounts, 43546731, 23456311, 500.0);

export = {
  getNameAndBalance,
  transferAmount,
  accounts
}