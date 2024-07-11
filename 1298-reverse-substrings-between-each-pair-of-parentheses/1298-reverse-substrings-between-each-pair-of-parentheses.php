class Solution {
  function reverseParentheses($s) {
    $res = '';
    $st = [];
    $to = 0;
    for ($i = 0; $i < strlen($s); $i++) {
      switch ($s[$i]) {
        case '(':
          $st []= $to;
          break;
        case ')':
          $from = array_pop($st);
          $res = substr($res, 0, $from) . strrev(substr($res, $from, $to - $from)) . substr($res, $to);
          break;
        default:
          $res .= $s[$i];
          $to++;
          break;
      }
    }
    return $res;   
  }
}