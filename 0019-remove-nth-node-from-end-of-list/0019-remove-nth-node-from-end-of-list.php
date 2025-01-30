/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

  /**
    * @param ListNode $head
    * @param Integer $n
    * @return ListNode
    */
  function removeNthFromEnd($head, $n) {
    $node = $prev = $head = new ListNode(0, $head);
    while ($node->next) {
      $n ? $n-- : $prev = $prev->next;
      $node = $node->next;
    }
    $prev->next = $prev->next->next;
    return $head->next;
  }
}