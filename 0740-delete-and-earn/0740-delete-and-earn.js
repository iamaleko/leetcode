const deleteAndEarn = (nums) => {
    // merge duplicates
    nums.sort((a, b) => a - b);
    const map = new Map();
    let last = null;
    for (const num of nums) {
        if (!(num in map)) {
            if (last) map[last].next = num;
            map[num] = { val: num, prev: last, next: null}
            last = num;
        } else {
            map[num].val += num;
        }
    }
    
    const dp = [];
    let p = 0;
    for (const num in map) {
        dp[p] = Math.max(
            dp[p-1] || 0,
            map[num].val + (dp[map[num].prev === num - 1 ? p-2 : p-1] || 0)
        );
        ++p;
    }
    
    return dp.at(-1);
};