class Solution {
  function romanToInt($s) {
    $ans = 0;
    $map = [ 'I' => 1, 'V' => 5, 'X' => 10, 'L' => 50, 'C' => 100, 'D' => 500, 'M' => 1000 ];
    for ($i = 0; $i < strlen($s); $i++) {
      if ($i && $map[$s[$i]] > $map[$s[$i - 1]]) {
        $ans -= $map[$s[$i - 1]];
        $ans += $map[$s[$i]] - $map[$s[$i - 1]];
      } else {
        $ans += $map[$s[$i]];
      }
    }
    return $ans;
  }
}