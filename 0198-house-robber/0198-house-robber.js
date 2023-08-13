const rob = (nums) => {
    const max = nums.length - 2, mem = {}, go = (i) => {
        if (i in mem) return mem[i];
        return mem[i] = (nums[i] || 0) + (i < max ? Math.max(go(i + 2), go(i + 3)) : 0);
    }
    return go(-2);
};