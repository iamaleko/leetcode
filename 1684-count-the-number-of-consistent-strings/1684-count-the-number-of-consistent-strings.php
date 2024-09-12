class Solution {
  function countConsistentStrings($allowed, $words) {
    $allowed = array_flip(str_split($allowed));
    $ans = 0;
    foreach($words as $word) {
      foreach(str_split($word) as $ch) {
        if (!array_key_exists($ch, $allowed)) {
          continue 2;
        }
      }
      $ans++;
    }
    return $ans;
  }
}