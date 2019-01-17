'use strict';
class _Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }

  getNext() {
    return this.next;
  }
  setNext(next) {
    this.next = next;
  }
  getVal() {
    return this.val;
  }
  setVal(val) {
    this.val = val;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  toString() {
    let out = 'Head: ';
    let temp = this.head;
    while(temp !== null) {
      out += temp.getVal() + ', ';
      temp = temp.getNext();
    }
    out += ':Tail';
    return out;
  }
  getHead() {
    return this.head;
  }
  setHead(node) {
    this.head = node;
  }
  insertFirst(val) {
    const node = new _Node(val);
    if (this.head) node.setNext(this.head);
    this.setHead(node);
  }
  insertLast(val) {
    const node = new _Node(val);
    let temp;
    if (!this.head) this.setHead(node);
    else {
      temp = this.head;
      while(temp.next !== null) {
        temp = temp.next;
      }
      temp.setNext(node);
    }
  }
  remove(val) {
    let prev;
    let temp = this.head;
    while(temp !== null && temp.getVal() !== val) {
      prev = temp;
      temp = temp.getNext();
    }
    if (temp) {
      prev.setNext(temp.getNext());
      return temp.getVal();
    }
    return null;
  }
  find(val) {
    let temp = this.head;
    while(temp !== null && temp.getVal() !== val) {
      temp = temp.getNext();
    }
    return Boolean(temp);
  }
}

// const list = new LinkedList();
// list.insertFirst('middle');
// list.insertFirst('first');
// list.insertLast('last');
// console.log(list.toString());
// list.remove('middle');
// console.log(list.toString());
// console.log(list.find('last '));
