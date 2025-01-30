class Solution {

  /**
    * @param Integer $x
    * @return Boolean
    */
  function isPalindrome($x) {
    if ($x < 0) return false;
    return (string)$x === strrev((string)$x);
  }
}