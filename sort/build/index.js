"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CharactersCollection_1 = require("./CharactersCollection");
const NumbersCollection_1 = require("./NumbersCollection");
const nc = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
const cc = new CharactersCollection_1.CharactersCollection("Xaayb");
// const sorter = new Sorter(cc);
// sorter.sort();
// console.log(cc.data);
// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);
// const sorter = new Sorter(linkedList);
// sorter.sort();
// linkedList.print();
cc.sort();
console.log(cc.data);