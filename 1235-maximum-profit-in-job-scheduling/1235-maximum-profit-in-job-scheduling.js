const jobScheduling = (from, to, cost) => {
    
    // create single sorted array
    const jobs = [];
    for (const i in from) {
        jobs.push({
            from: from[i],
            to: to[i],
            cost: cost[i],
            next: -1,
            profit: cost[i],
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
    for (let i = jobs.length - 2; i > -1; --i) {
        jobs[i].profit = Math.max(jobs[i].cost + (jobs[jobs[i].next]?.profit || 0), jobs[i + 1]?.profit || 0);
    }
    
    return jobs[0].profit;
};