const uniquePaths = (m, n) => {
    const dp = new Array(m).fill().map(() => new Array(n).fill(null));
    const xq = [0], yq = [0];
    --m;
    --n;
    while (xq.length) {
        const x = xq.shift();
        const y = yq.shift();
        if (dp[y][x] !== null) continue;
        if (x === 0 || y === 0) {
            dp[y][x] = 1;
        } else {
            dp[y][x] = dp[y - 1][x] + dp[y][x - 1];
        }
        if (dp[y][x + 1] === null) { xq.push(x + 1); yq.push(y); }
        if (dp[y + 1]?.[x] === null) { xq.push(x); yq.push(y + 1); }
    }
    return dp[m][n];
};