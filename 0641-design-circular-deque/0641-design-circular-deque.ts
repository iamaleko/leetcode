class DoublyLinkedListNode {
  next?: DoublyLinkedListNode;
  prev?: DoublyLinkedListNode;
  val: number;
  constructor(value: number) {
    this.val = value;
  }
}
class MyCircularDeque {
  size: number;
  limit: number;
  tail?: DoublyLinkedListNode;
  head?: DoublyLinkedListNode;
  constructor(k: number) {
    this.size = 0;
    this.limit = k;
  }
  insertFront(value: number): boolean {
    if (this.isFull()) return false;
    const node = new DoublyLinkedListNode(value);
    if (this.head) {
      this.head.prev = node;
      node.next = this.head;
    } else {
      this.tail = node;
    }
    this.head = node;
    this.size++;
    return true;
  }
  insertLast(value: number): boolean {
    if (this.isFull()) return false;
    const node = new DoublyLinkedListNode(value);
    if (this.tail) {
      this.tail.next = node;
      node.prev = this.tail;
    } else {
      this.head = node;
    }
    this.tail = node;
    this.size++;
    return true;
  }
  deleteFront(): boolean {
    if (this.isEmpty()) return false;
    this.size--;
    this.head = this.head.next;
    if (this.head) {
      this.head.prev = undefined;
    } else {
      this.tail = undefined;
    }
    return true;
  }
  deleteLast(): boolean {
    if (this.isEmpty()) return false;
    this.size--;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = undefined;
    } else {
      this.head = undefined;
    }
    return true;
  }
  getFront(): number {
    return this.head ? this.head.val : -1; 
  }
  getRear(): number {
    return this.tail ? this.tail.val : -1; 
  }
  isEmpty(): boolean {
    return this.size === 0;
  }
  isFull(): boolean {
   return this.size === this.limit;   
  }
}