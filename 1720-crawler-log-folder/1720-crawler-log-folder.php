class Solution {
  function minOperations($logs) {
    $level = 0;
    foreach ($logs as $op) {
      if ($op === '../') {
        if ($level) $level--;
      }
      else if ($op !== './') {
        $level++;
      }
    }
    return $level;
  }
}