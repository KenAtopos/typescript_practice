import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const nc = new NumbersCollection([10, 3, -5, 0]);

const sorter = new Sorter(nc);
sorter.sort();
console.log(nc.data);
