class Solution {

  /**
    * @param Integer $n
    * @return String[]
    */
  function generateParenthesis($available, $s = '', $opened = 0) {
    if ($opened && $available) {
      return array_merge(
          $this->generateParenthesis($available - 1, $s . '(', $opened + 1),
          $this->generateParenthesis($available, $s . ')', $opened - 1),
      );
    } else if ($opened) {
      return $this->generateParenthesis($available, $s . ')', $opened - 1);
    } else if ($available) {
      return $this->generateParenthesis($available - 1, $s . '(', $opened + 1);
    }
    return [ $s ];
  }
}