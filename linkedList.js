'use strict';
const lodash = require('lodash');
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
function findPrevious(list, val){
  
  let currentNode = list.getHead();
  let prevNode = null;
  while(currentNode !== null && currentNode.getVal() !== val){
    //traverse
    prevNode = currentNode;
    currentNode = currentNode.getNext();
  }
  //found or is not on list
  if(currentNode){
    return prevNode;
  }
  return null;
}
function findLast(list){
  let currentNode = list.getHead();
  while(currentNode !== null && currentNode.getNext()!== null){
    currentNode = currentNode.getNext();
  }
  return currentNode;
}


function reverse(list) {
  let temp = list.getHead();
  let prev = null;
  let next = null;
  while(temp !== null) {
    next = temp.getNext();
    temp.setNext(prev);

    prev = temp;
    temp = next;
  }
  list.setHead(prev);
}
function thirdFromLast(list){
  // [ 1, 2, 3, 4]
  let currentNode = list.getHead();
  let prevNode = null;
  let targetNode = null; //<-- target to return
  while(currentNode !== null && currentNode.getNext() !== null){
    // target->prev->curr->next(null)
    targetNode = prevNode;
    prevNode = currentNode;
    currentNode = currentNode.getNext();
  }
  //is null so return target
  if(targetNode){
    return targetNode.getVal();
  }
  return null;
}
function middle(list) {
  // const middle = Math.ceil(size(list)/2);
  // const middle = size(list)/2; // apparantly this doesn't work?
  // let temp = list.getHead();
  // for (let i=1; i<middle; i++) {
  //   temp = temp.getNext();
  // }
  // if (temp) return temp.getVal();
  // return null;
  let temp = list.getHead();
  let next = temp;
  if (temp === null) {
    // list is 0 long
    return null;
  }
  while(next !== null && next.getNext() !== null) {
    temp = temp.getNext();
    next = next.getNext().getNext();
  }
  return temp.getVal();
}
function cycle(list){
  // [1,2,3,2,3,5,6 n->any old node]
  let arr=[];//put nodes in here
  // traverse through list, check if node's(address in mem) a match to <old node table>
  let currentNode = list.getHead();
  while (currentNode !== null){
    //match condition check here
    arr.push(currentNode);
    //console.log("here is arr:", arr.length);
    // if(currentNode.getNext() in arr){
    //   return true;
    // }
    let test = false;
    arr.forEach(node=>{
      if(lodash.isEqual(node, currentNode.getNext())){
        test = true;
      }
    });
    if(test){
      return true;
    }
    currentNode = currentNode.getNext();
  }
  return false;
}
function main(){
  const SLL = new LinkedList();

  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Apollo');
  SLL.remove('squirrel');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 2);
  SLL.remove('Tauhida');
  findLast(SLL).setNext(SLL.getHead());
  // console.log(SLL.toString());
  //reverse(SLL);
  //console.log(SLL.toString());
  //console.log(middle(SLL));
  console.log(cycle(SLL));
}
main();
