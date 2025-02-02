class Solution {

  /**
    * @param Integer[] $nums
    * @param Integer $target
    * @return Integer
    */
  function search($nums, $target) {
    $l = 0;
    $r = count($nums) - 1;
    // if array is rotated
    if ($nums[0] > $nums[$r]) {
      // find rotation point
      while ($l < $r) {
        $c = $l + $r >> 1;
        if ($nums[$c] > $nums[$l]) {
          $l = $c;
        } else {
          $r = $c;
        }
      }
      // select search side
      if ($target < $nums[0]) {
        $l++;
        $r = count($nums) - 1;
      } else {
        $r = $l;
        $l = 0;
      }
    }
    // perform target search
    if ($target >= $nums[$l] && $target <= $nums[$r]) {
      while ($l < $r) {
        $c = $l + $r >> 1;
        if ($nums[$c] < $target) {
          $l = $c + 1;
        } else {
          $r = $c;
        }
      }
      if ($nums[$l] === $target) {
        return $l;
      }
    }
    return -1;
  }
}