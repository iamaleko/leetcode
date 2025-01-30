class Solution {

  /**
    * @param Integer[] $height
    * @return Integer
    */
  function maxArea($height) {
    $ans = 0;
    $l = 0;
    $r = count($height) - 1;
    while ($l !== $r) {
      if ($height[$l] < $height[$r]) {
        $ans = max($ans, $height[$l] * ($r - $l));
        $l++;
      } else {
        $ans = max($ans, $height[$r] * ($r - $l));
        $r--;
      }
    }
    return $ans;
  }
}