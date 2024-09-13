class Solution {
  function xorQueries($arr, $queries) {
    for ($i = 1; $i < count($arr); $i++) {
      $arr[$i] ^= $arr[$i - 1];
    }
    $ans = [];
    foreach ($queries as list($l, $r)) {
      $ans[] = ($l ? $arr[$l - 1] : 0) ^ $arr[$r];
    }
    return $ans;
  }
}