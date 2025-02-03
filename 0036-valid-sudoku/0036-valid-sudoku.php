use Ds\Set as Set;

class Solution {

  /**
    * @param String[][] $board
    * @return Boolean
    */
  function isValidSudoku($board) {
    $set = [];
    for ($row = 0; $row < count($board); $row++) {
      for ($col = 0; $col < count($board); $col++) {
        $val = (int)$board[$row][$col];
        if ($val) {
          $box = floor($row / 3) * 3 + floor($col / 3);
          if (
            $set[$row + 1 << 4 | $val] ||
            $set[$col + 1 << 8 | $val] ||
            $set[$box + 1 << 12 | $val]
          ) return false;
          $set[$row + 1 << 4 | $val] = true;
          $set[$col + 1 << 8 | $val] = true;
          $set[$box + 1 << 12 | $val] = true;
        }
      } 
    } 
    return true;
  }
}