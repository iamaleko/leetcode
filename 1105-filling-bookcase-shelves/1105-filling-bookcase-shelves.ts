function minHeightShelves(books: number[][], shelf_width: number): number {
    const dp: number[] = new Array(books.length + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= books.length; i++) {
        let filled_width = 0,
          shelf_height = 0;

        for (let j = i - 1; j >= 0; j--) {
          const [book_width, book_height] = books[j]
          filled_width += book_width;
          if (filled_width > shelf_width) break;
          
          shelf_height = Math.max(shelf_height, book_height);
          dp[i] = Math.min(dp[i], dp[j] + shelf_height);
        }
    }

    return dp[dp.length - 1];
};