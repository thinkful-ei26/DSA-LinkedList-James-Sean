'use strict';
class _Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }

  getNext() {
    return this.next;
  }
  setNext(next) {
    this.next = next;
  }
  getPrev() {
    return this.prev;
  }
  setPrev(prev) {
    this.prev = prev;
  }
  getVal() {
    return this.val;
  }
  setVal(val) {
    this.val = val;
  }
}

class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getHead() {
    return this.head;
  }
  setHead(node) {
    this.head = node;
  }
  getTail() {
    return this.tail;
  }
  setTail(node) {
    this.tail = node;
  }
  insertFirst(val) {
    const node = new _Node(val);
    if (this.getHead()) node.setNext(this.getHead());
    else if (!this.getTail()) this.setTail(node);
    this.setHead(node);
  }
  insertLast(val) {
    const node = new _Node(val);
    if (this.getTail()) node.setPrev(this.getTail());
    else if (!this.getHead()) this.setHead(node);
    this.setTail(node);
  }
}
