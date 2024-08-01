/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class MinHeap {
  static #sink(heap: ListNode[], i: number): void {
    while (true) {
      const l = i * 2 + 1,
            r = i * 2 + 2;
      let t = i;
      if (l < heap.length && heap[l].val < heap[t].val) t = l;
      if (r < heap.length && heap[r].val < heap[t].val) t = r;
      if (t === i) break;
      [heap[t], heap[i]] = [heap[i], heap[t]];
      i = t;
    }
  }
  static #bubble(heap: ListNode[], i: number): void {
    while (i) {
      let t = (i - 1) >> 1;
      if (t === i || heap[t].val <= heap[i].val) break;
      [heap[t], heap[i]] = [heap[i], heap[t]];
      i = t;
    }
  }
  static heapify(heap: ListNode[]): void {
    for (let i = heap.length >> 1; i >= 0; i--) {
      this.#sink(heap, i);
    }
  }
  static pop(heap: ListNode[]): ListNode | null {
    if (heap.length === 0) return null;
    if (heap.length === 1) return heap.pop();
    [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
    const node = heap.pop();
    this.#sink(heap, 0);
    return node;
  }
  static push(heap: ListNode[], node: ListNode): void {
    heap.push(node);
    this.#bubble(heap, heap.length - 1);
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  lists = lists.filter((node) => node !== null);
  MinHeap.heapify(lists);
  const head = new ListNode(0);
  let tail = head;
  while (lists.length) {
    const node = MinHeap.pop(lists);
    if (node === null) break;
    tail.next = node;
    tail = node;
    if (node.next) {
      MinHeap.push(lists, node.next);
      node.next = null;
    }
  }
  return head.next;
};