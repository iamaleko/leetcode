class Solution {
  function findTheWinner($n, $k) {
    $players = range(1, $n);
    $pos = 0;
    $k--;
    while (count($players) > 1) {
      $pos = ($pos + $k) % count($players);
      array_splice($players, $pos, 1);
    }
    return $players[0];
  }
}
