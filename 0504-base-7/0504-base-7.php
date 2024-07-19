class Solution {

    /**
     * @param Integer $num
     * @return String
     */
    function convertToBase7($num) {
      if (!$num) return '0';
      $s = '';
      $minus = $num < 0;
      $num = abs($num);
      while($num) {
        $s = strval($num % 7) . $s;
        $num -= $num % 7;
        $num /= 7;
      }
      return ($minus ? '-' : '') . $s;
    }
}