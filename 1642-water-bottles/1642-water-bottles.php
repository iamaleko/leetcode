class Solution {
  function numWaterBottles($full, $ex) {
    $ans = 0;
    $empty = 0;
    while ($full) {
      if ($full) {
        $ans += $full;
        $empty += $full;
        $full = 0;
      }
      while ($empty >= $ex) {
        $empty -= $ex;
        $full += 1;
      }
    }
    return $ans;
  }
}