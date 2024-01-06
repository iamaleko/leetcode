const jobScheduling = (from, to, cost) => {
    
    // create single sorted array
    const jobs = [];
    for (const i in from) {
        jobs.push({
            from: from[i],
            to: to[i],
            cost: cost[i],
            next: -1,
        })
    }
    jobs.sort((a, b) => a.from - b.from || a.to - b.to);
    
    // find next
    for (let i = 0; i < jobs.length; ++i) {
        let l = i + 1, r = jobs.length - 1, c;
        while (l <= r) {
            c = l + r >>> 1;
            if (jobs[c].from >= jobs[i].to) {
                jobs[i].next = c;
                r = c - 1;
            } else {
                l = c + 1;
            }
        }
    }
    
    // select most valuable job
    const dp = [];
    for (let i = jobs.length - 1; i > -1; --i) {
        dp[i] = Math.max(jobs[i].cost + (dp[jobs[i].next] || 0), dp[i + 1] || 0);
    }
    
    return dp[0];
};