class Solution {
  function twoSum(array $nums, int $target): array {
    $m = [];
    foreach ($nums as $i => $num) {
      if (array_key_exists($target - $num, $m)) {
        return [$m[$target - $num], $i];
      }
      $m[$num] = $i;
    }
    return [];
  }
}