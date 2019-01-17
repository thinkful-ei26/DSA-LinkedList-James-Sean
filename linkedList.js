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
    out = out.slice(0, out.length - 2);
    out += ' :Tail';
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
  insertBefore(val, key){
    let prev;
    let temp = this.head;
    while(temp !== null && temp.getVal() !== key){
      prev= temp;
      temp = temp.getNext();
    }
    if(temp){
      const node = new _Node(val);
      node.setNext(temp);
      prev.setNext(node);
    }
    return Boolean(temp);
  }
  insertAfter(val, key){
    let next;
    let temp = this.head;
    while(temp !== null && temp.getVal() !== key){
      temp = temp.getNext();
      next = temp.getNext();
    }
    if(temp){
      const node = new _Node(val);
      temp.setNext(node);
      node.setNext(next);
    }
    return Boolean(temp);
  }
  insertAt(val, index) {
    // the index param is the list index and not position
    let count = 0;
    let temp = this.head;
    const node = new _Node(val);
    while(temp !== null && count !== index -1){
      temp = temp.getNext();
      count++;
    }
    if(temp){
      node.setNext(temp.getNext());
      temp.setNext(node);
    }
    return Boolean(temp);
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

function display(list) {
  let out = 'Head: ';
  let temp = list.getHead();
  while(temp !== null) {
    out += temp.getVal() + ', ';
    temp = temp.getNext();
  }
  out = out.slice(0, out.length - 2);
  out += ' :Tail';
  return out;
}
function size(list) {
  let size = 0;
  let temp = list.getHead();
  while (temp !== null) {
    temp = temp.getNext();
    size ++;
  }
  return size;
}
function isEmpty(list) {
  return (list.getHead() === null);
}

function main(){
  const SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  console.log(display(SLL));
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 2);
  SLL.remove('Tauhida');
  console.log(SLL.toString());
  console.log(size(SLL));
}
main();