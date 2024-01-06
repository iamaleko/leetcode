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
    jobs.sort((a, b) => a.from - b.from);
    
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
        if (jobs[i].next !== -1) {
            jobs[i].cost = Math.max(jobs[i].cost + jobs[jobs[i].next].cost, jobs[i + 1].cost);
        } else {
            jobs[i].cost = Math.max(jobs[i].cost, jobs[i + 1].cost);
        }
    }
    
    return jobs[0].cost;
};