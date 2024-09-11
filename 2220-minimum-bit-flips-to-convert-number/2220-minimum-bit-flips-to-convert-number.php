class Solution {
  /**
    * @param Integer $start
    * @param Integer $goal
    * @return Integer
    */
  function minBitFlips($start, $goal) {
    $ans = 0;
    $goal ^= $start;
    while ($goal) {
      $ans += $goal & 1;
      $goal >>= 1;
    }
    return $ans;
  }
}