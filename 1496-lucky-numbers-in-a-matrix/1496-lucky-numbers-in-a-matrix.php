class Solution {
  
  /**
    * @param Integer[][] $matrix
    * @return Integer[]
    */
  function luckyNumbers($matrix) {
    foreach ($matrix[0] as $x => $_) {
      $max = PHP_INT_MIN;
      $max_y = null;
      foreach ($matrix as $y => $_) {
        if ($matrix[$y][$x] > $max) {
          $max = $matrix[$y][$x];
          $max_y = $y;
        }
      }
      $min = PHP_INT_MAX;
      $min_x = null;
      foreach ($matrix[0] as $_x => $_) {
        if ($matrix[$max_y][$_x] < $min) {
          $min = $matrix[$max_y][$_x];
          $min_x = $_x;
        }
      }
      if ($min_x === $x) {
        return [$matrix[$max_y][$min_x]];
      }
    }
    return [];
  }
}