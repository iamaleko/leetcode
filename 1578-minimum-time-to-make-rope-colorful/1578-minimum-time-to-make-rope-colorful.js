const minCost = (colors, time) => {
    const groups = [];
    let group = 0;
    for (const i in colors) {
        if (colors[i - 1] === colors[i]) {
            if (!groups[group]) groups[group] = {max: time[i - 1], sum: 0};
            if (groups[group].max < time[i]) {
                groups[group].sum += groups[group].max;
                groups[group].max = time[i];
            } else {
                groups[group].sum += time[i];   
            }
        } else if (groups[group]) {
            ++group;
        }
    }
    
    if (!groups.length) return 0;
    
    let res = 0;
    for (group of groups) {
        res += group.sum;
    }
    
    return res;
};