class ListNodeMinHeap extends SplHeap {
  public function compare($a, $b) {
    return $b->val - $a->val;
  }
}

class Solution {

  /**
    * @param ListNode[] $lists
    * @return ListNode
    */
  function mergeKLists($lists) {
    $lists = array_filter($lists, fn($list) => $list);
    $heap = new ListNodeMinHeap();
    foreach ($lists as $list) {
      $heap->insert($list);
    }
    $tail = $head = new ListNode();
    while (!$heap->isEmpty()) {
      $node = $heap->extract();
      if ($node->next) {
        $heap->insert($node->next);
      }
      $tail = $tail->next = $node;
    }
    return $head->next;
  }
}