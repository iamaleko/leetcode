class Solution {
  function nodesBetweenCriticalPoints($head) {
    $critical_points = [];
    $prev = $head;
    $node = $head->next;
    $pointer = 0;
    while ($node) {
      if (
        $node->next and
        (
          $node->next->val > $node->val and $prev->val > $node->val or
          $node->next->val < $node->val and $prev->val < $node->val
          )
      ) {
        $critical_points []= $pointer;
      }
      $prev = $node;
      $node = $node->next;
      $pointer++;
    }
    
    if (count($critical_points) < 2) {
      return [-1, -1];
    }
    $max_distance = $critical_points[array_key_last($critical_points)] - $critical_points[array_key_first($critical_points)];
    $min_distance = INF;
    for ($i = 1; $i < count($critical_points); $i++) {
      if ($min_distance > $critical_points[$i] - $critical_points[$i - 1]) {
        $min_distance = $critical_points[$i] - $critical_points[$i - 1];
      }
    }
    return [$min_distance, $max_distance];
  }
}