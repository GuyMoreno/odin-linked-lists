import { Node } from "./node.js";

// [ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null

export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  // adding new value object node:
  append(value) {
    const newNode = new Node(value);
    // if empty (no headNode) when adding new:
    if (this.headNode === null) {
      // so the first become head
      this.headNode = newNode;
      // and exit
      return;
    }

    // creating a var to walk through the list
    let current = this.headNode;

    // while we didn't reach the end of the list
    // we chech the object's nextNode... property
    while (current.nextNode !== null) {
      // keep going to the nextNode
      // so while current.nextNode is not null
      // the current object is the nextNode
      current = current.nextNode;
    }

    // only when we reach the end of the list
    // so we add the newNode
    current.nextNode = newNode;
  }

  toString() {
    let current = this.headNode;
    let result = "";

    // walk through the list
    while (current !== null) {
      result += `( ${current.value} ) -> `;
      current = current.nextNode;
    }

    result += "null";
    return result;
  }

  // add new obj to beginning
  prepend(value) {
    // create a new node with the value
    const newNode = new Node(value);
    // set the newNode's nextNode to the current headNode
    newNode.nextNode = this.headNode;
    // set the headNode to the newNode
    // so the newNode becomes the first node in the list
    this.headNode = newNode;
  }

  size() {
    let count = 0;
    let current = this.headNode;

    while (current !== null) {
      count++;
      current = current.nextNode;
    }

    return count;
  }

  head() {
    return this.headNode;
  }

  tail() {
    // if the list is empty, return null
    if (this.headNode === null) return null;

    let current = this.headNode;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }

    return current;
  }

  // returns the node at the given index
  at(index) {
    if (index < 0) return null;

    let current = this.headNode;
    let i = 0;

    while (current !== null) {
      if (i === index) return current;
      current = current.nextNode;
      i++;
    }

    return null;
  }

  pop() {
    if (!this.headNode) {
      console.log("This is an already empty list");
      return;
    }

    if (!this.headNode.nextNode) {
      this.headNode = null;
      console.log("This list has 1 item");
      return;
    }

    let current = this.headNode;
    while (current.nextNode.nextNode) {
      console.log(current.nextNode.value, current.nextNode.nextNode.value);
      current = current.nextNode;
    }

    current.nextNode = null;
  }

  contains(value) {
    let current = this.headNode;

    while (current) {
      if (current.value === value) return true;
      current = current.nextNode;
    }

    return false;
  }

  find(value) {
    let current = this.headNode;
    let index = 0;

    while (current) {
      if (current.value === value) return index;
      current = current.nextNode;
      index++;
    }

    return null;
  }

  insertAt(value, index) {
    if (index < 0 || index > this.size()) {
      console.log("Invalid index");
      return;
    }

    const newNode = new Node(value);

    if (index === 0) {
      newNode.nextNode = this.headNode;
      this.headNode = newNode;
      return;
    }

    let current = this.headNode;
    let i = 0;

    while (i < index - 1) {
      current = current.nextNode;
      i++;
    }

    newNode.nextNode = current.nextNode;
    current.nextNode = newNode;
  }
}
