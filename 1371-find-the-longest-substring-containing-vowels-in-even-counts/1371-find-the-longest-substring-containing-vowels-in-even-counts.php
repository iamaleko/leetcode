class Solution {
  function findTheLongestSubstring($s) {
    $v = [ 'a' => 1, 'e' => 2, 'i' => 4, 'o' => 8, 'u' => 16 ];
    $m = [ 0 => -1 ];
    $mask = 0;
    $ans = 0;
    foreach (str_split($s) as $i => $ch) {
      if (array_key_exists($ch, $v)) $mask ^= $v[$ch];
      if (array_key_exists($mask, $m)) {
        if ($ans < $i - $m[$mask]) $ans = $i - $m[$mask];
      } else {
        $m[$mask] = $i;
      }
    }
    return $ans;
  }
}