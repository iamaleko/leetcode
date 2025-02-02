class Solution {

  /**
    * @param Integer[] $nums
    * @return Boolean
    */
  function check($nums) {
    $nums []= $nums[0];
    for ($i = 1, $fold = false; $i < count($nums); $i++) {
      if ($nums[$i] < $nums[$i - 1]) {
        if ($fold) return false;
        $fold = true;
      }
    }
    return true;
  }
}