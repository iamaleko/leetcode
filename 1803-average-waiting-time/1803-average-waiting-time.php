class Solution {
  function averageWaitingTime($customers) {
    $release = 0;
    $sum = 0;
    foreach ($customers as [$arrival, $time]) {
      if ($arrival > $release) $release = $arrival;
      $release += $time;
      $sum += $release - $arrival;
    }
    return $sum / count($customers);
  }
}