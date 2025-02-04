class Solution {

  /**
    * @param Integer[] $nums
    * @return Integer
    */
  function maxAscendingSum($nums) {
    $ans = $sum = $nums[0];
    for ($i = 1; $i < count($nums); $i++) {
      if ($nums[$i-1] >= $nums[$i]) {
        [$ans, $sum] = [max($ans, $sum), 0];
      }
      $sum += $nums[$i];
    }
    return max($ans, $sum);
  }
}