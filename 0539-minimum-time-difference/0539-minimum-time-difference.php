class Solution {
  function findMinDifference($timePoints) {
    $timePoints = array_map(fn($e) => (int)substr($e, 3, 2) + (int)substr($e, 0, 2) * 60, $timePoints);  
    sort($timePoints);
    $ans = $timePoints[0] - $timePoints[array_key_last($timePoints)] + 24 * 60;
    for ($i = 1; $i < count($timePoints); $i++) {
      $diff = $timePoints[$i] - $timePoints[$i - 1];
      if ($diff < $ans) $ans = $diff;
    }
    return $ans;
  }
}