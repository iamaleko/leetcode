class Solution {

    /**
     * @param Integer $num
     * @return String
     */
    function convertToBase7($num) {
      if (!$num) return '0';
      $s = '';
      $n = abs($num);
      while($n) {
        $s = strval($n % 7) . $s;
        $n = ($n - $n % 7) / 7;
      }
      return $num < 0 ? '-' . $s : $s;
    }
}