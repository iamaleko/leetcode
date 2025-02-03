class Solution {

  /**
    * @param Integer[] $nums
    * @return Integer
    */
  function longestMonotonicSubarray($nums) {
    $inc = $dec = $ans = 1;
    for ($i = 1; $i < count($nums); $i++) {
      if ($nums[$i] > $nums[$i-1]) {
        $dec = 1;
        $ans = max($ans, ++$inc);
      } else if ($nums[$i] < $nums[$i-1]) {
        $inc = 1;
        $ans = max($ans, ++$dec);
      } else if ($inc > 1 || $dec > 1) {
        $inc = $dec = 1;
      }
    }
    return $ans;
  }
}