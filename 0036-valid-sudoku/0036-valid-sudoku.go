import (
// "strconv"
)

func isValidSudoku(board [][]byte) bool {
	set := map[int]bool{}
	for row := 0; row < len(board); row++ {
		for col := 0; col < len(board); col++ {
			val := int(rune(board[row][col]) - '0')
			if val != -2 {
				box := ((row / 3) * 3) + col/3
				if set[(row+1)<<4|val] || set[(col+1)<<8|val] || set[(box+1)<<12|val] {
					return false
				}
				set[(row+1)<<4|val] = true
				set[(col+1)<<8|val] = true
				set[(box+1)<<12|val] = true
			}
		}
	}
	return true
}