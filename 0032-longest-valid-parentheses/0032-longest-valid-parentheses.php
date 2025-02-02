class Solution {

  /**
    * @param String $s
    * @return Integer
    */
  function longestValidParentheses($s) {
    $stack = [];
    $index = [];
    $intervals = [];
    foreach (str_split($s) as $i => $ch) {
      if ($ch === '(') {
        $stack []= $ch;
        $index []= $i;
      } else if (!empty($stack) && $stack[count($stack)-1] == '(') {
        array_pop($stack);
        $j = array_pop($index);
        while (!empty($intervals) && $intervals[count($intervals)-1][0] > $j) {
          array_pop($intervals);
        }
        if (!empty($intervals) && $intervals[count($intervals)-1][1] === $j - 1) {
          $intervals[count($intervals)-1][1] = $i;
        } else {
          $intervals []= [$j, $i];
        }
      }
    }
    $ans = 0;
    foreach ($intervals as $interval) {
      $ans = max($ans, $interval[1] - $interval[0] + 1);
    }
    return $ans;
  }
}