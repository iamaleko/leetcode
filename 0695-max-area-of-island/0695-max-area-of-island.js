const maxAreaOfIsland = (grid) => {
    const dfs = (r,c) => {
        if (r in grid && c in grid[r] && grid[r][c]) {
            grid[r][c] = null;
            return 1 + dfs(r + 1, c) + dfs(r - 1, c) + dfs(r, c + 1) + dfs(r, c - 1)
        }
        return 0;
    }

    let max = 0, r, c, s;
    for (r in grid) {
        for (c in grid[r]) {
            if (grid[r][c]) {
                s = dfs(r * 1, c * 1);
                if (s > max) max = s;
            }
        }
    }
    
    return max;
};