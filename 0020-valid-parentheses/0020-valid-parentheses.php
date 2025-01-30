class Solution {

  /**
    * @param String $s
    * @return Boolean
    */
  function isValid($s) {
    $pairs = [']' => '[', ')' => '(', '}' => '{'];
    $stack = [];
    foreach (str_split($s) as $ch) {
      if ($pairs[$ch]) {
        if (empty($stack) || array_pop($stack) !== $pairs[$ch]) return false;
      } else {
        $stack[] = $ch;
      }
    }
    return empty($stack);
  }
}