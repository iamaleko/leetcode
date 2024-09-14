class Solution {
  function longestSubarray($nums) {
    $max = max($nums);
    $ans = 0;
    $contiguous = 0;
    foreach ($nums as $num) {
      if ($num === $max) {
        if (++$contiguous > $ans) $ans = $contiguous;
      } else {
        $contiguous = 0;
      }
    }   
    return $ans;
  }
}