class Solution {
  private static $chars = [
    'q' => 0, 'w' => 0, 'e' => 0, 'r' => 0, 't' => 0, 'y' => 0, 'u' => 0, 'i' => 0, 'o' => 0, 'p' => 0, 
    'a' => 1, 's' => 1, 'd' => 1, 'f' => 1, 'g' => 1, 'h' => 1, 'j' => 1, 'k' => 1, 'l' => 1, 
    'z' => 2, 'x' => 2, 'c' => 2, 'v' => 2, 'b' => 2, 'n' => 2, 'm',
  ];

  /**
    * @param String[] $words
    * @return String[]
    */
  function findWords($words) {
    $ans = [];
    foreach ($words as $word) {
      $row = self::$chars[strtolower($word[0])];
      for ($i = 1; $i < strlen($word); $i++) {
        if ($row !== self::$chars[strtolower($word[$i])]) continue 2;
      } 
      $ans []= $word;
    }
    return $ans;
  }
}