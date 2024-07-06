class Solution {
  function passThePillow($n, $time) {
    $p = 1;
    $d = 1;
    while ($time--) {
      if ($p === 1 || $p === $n) $d ^= 1;
      $d ? $p-- : $p++;
    }
    return $p;
  }
}