class Solution {
  
  /**
    * @param Integer[][] $matrix
    * @return Integer[]
    */
  function luckyNumbers($matrix) {
    $ans = [];
    for ($x = 0; $x < count($matrix[0]); $x++) {
      $max_val = PHP_INT_MIN;
      $max_y = null;
      for ($y = 0; $y < count($matrix); $y++) {
        if ($matrix[$y][$x] > $max_val) {
          $max_val = $matrix[$y][$x];
          $max_y = $y;
        }
      }
      $min_val = PHP_INT_MAX;
      $min_x = null;
      for ($_x = 0; $_x < count($matrix[0]); $_x++) {
        if ($matrix[$max_y][$_x] < $min_val) {
          $min_val = $matrix[$max_y][$_x];
          $min_x = $_x;
        }
      }
      if ($min_x === $x) {
        $ans []= $matrix[$max_y][$min_x];
      }
    }
    return $ans;
  }
}