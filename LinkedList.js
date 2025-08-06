import { Node } from "./node.js";

// [ NODE(head) ] -> [ NODE ] -> [ NODE(tail) ] -> null

export class LinkedList {
  constructor() {
    this.headNode = null;
  }

  append(value) {
    const newNode = new Node(value);
    // if empty (no headNode) when adding new:
    if (this.headNode === null) {
      // so the first become head
      this.headNode = newNode;
      // and exit
      return;
    }

    // handle the general case:

    // walking chain ⛓️‍💥, create a temp pointer
    let current = this.headNode;

    while (current.nextNode !== null) {
      current = current.nextNode;
    }
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

  at(index) {
    if (index < 0) {
      return null;
    }

    let current = this.headNode;
    let count = 0;

    while (current !== null) {
      if (count === index) {
        return current;
      }
      current = current.nextNode;
      count++;
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
      console.log("ERROR: invalid index");
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

  removeAt(index) {
    if (index < 0 || this.headNode === null) {
      console.log("Unvalid index / An empty list");
      return;
    }

    if (index === 0) {
      this.headNode = this.headNode.nextNode;
      return;
    }

    let current = this.headNode;
    let i = 0;

    //  0         1        2
    // ( 1 ) -> ( 2 ) -> ( 3 ) -> null

    while (current !== null && i < index - 1) {
      current = current.nextNode;
      i++;
    }

    if (current === null || current.nextNode === null) return;

    current.nextNode = current.nextNode.nextNode;
  }
}
