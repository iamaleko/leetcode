const minCostClimbingStairs = (cost) => {
    const mem = {}, climb = stair => stair in mem ? mem[stair] : mem[stair] = Math.min(
        cost[++stair] === undefined ? 0 : cost[stair] + climb(stair),
        cost[++stair] === undefined ? 0 : cost[stair] + climb(stair)
    );
    return climb(-1);
};