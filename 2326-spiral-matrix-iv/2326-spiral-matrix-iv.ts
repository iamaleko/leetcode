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
enum Direction { Top, Right, Bottom, Left };
function spiralMatrix(m: number, n: number, head: ListNode | null): number[][] {
  const ans = new Array(m).fill(null).map(() => new Array(n).fill(-1));
  let node = head, y = 0, x = 0, d = Direction.Right;
  while (node) {
    ans[y][x] = node.val;
    switch (d) {
      case Direction.Right: if (x + 1 === n || ans[y][x + 1] !== -1) d = Direction.Bottom; break;
      case Direction.Bottom: if (y + 1 === m || ans[y + 1][x] !== -1) d = Direction.Left; break;
      case Direction.Left: if (x === 0 || ans[y][x - 1] !== -1) d = Direction.Top; break;
      case Direction.Top: if (y === 0 || ans[y - 1][x] !== -1) d = Direction.Right; break;
    }
    switch (d) {
      case Direction.Right: x++; break;
      case Direction.Bottom: y++;  break;
      case Direction.Left: x--; break;
      case Direction.Top: y--; break;
    }
    node = node.next;
  }
  return ans;
};