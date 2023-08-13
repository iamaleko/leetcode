const search = (nums, target) => {
    let l = 0,
        r = nums.length - 1;
    while (l <= r) {
        const c = l + Math.ceil((r - l) / 2)
        if (nums[c] === target) {
            return c;
        } else if (target < nums[c]) {
            r = c - 1;
        } else {
            l = c + 1;
        }
    }
    return -1;
};