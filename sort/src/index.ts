import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const nc = new NumbersCollection([10, 3, -5, 0]);
const cc = new CharactersCollection("Xaayb");

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
