import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

console.log(list.toString());
list.removeAt(1);
console.log(list.toString());

// console.log(list.toString(list));

//  0         1        2
// ( 1 ) -> ( 2 ) -> ( 3 ) -> null
