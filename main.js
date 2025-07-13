import { LinkedList } from "./LinkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("cow");
list.append("horse");

console.log(list.toString());

list.insertAt("pig", 0);
console.log(list.toString());

list.prepend("bigPig");
console.log(list.toString());
