class Solution {
  function mergeNodes($head) {
    $node = $head->next;
    $head = new ListNode();
    $tail = $head;
    $sum = 0;
    while ($node !== null) {
      if ($node->val !== 0) {
        $sum += $node->val;
      } else {
        $tail->next = new ListNode($sum);
        $tail = $tail->next;
        $sum = 0;
      }
      $node = $node->next;
    }
    return $head->next;
  }
}