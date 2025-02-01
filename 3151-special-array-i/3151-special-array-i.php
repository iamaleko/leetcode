class Solution {
  function isArraySpecial($nums) {
    for ($i = 1; $i < count($nums); $i++) if (!($nums[$i-1] & 1 ^ $nums[$i] & 1)) return false;
    return true;
  }
}