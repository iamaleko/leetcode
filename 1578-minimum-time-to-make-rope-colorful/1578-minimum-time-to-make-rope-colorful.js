const minCost = (colors, time) => {
    let max = 0, res = 0;
    
    for (let i = 1; i < colors.length; ++i) {
        if (colors[i - 1] === colors[i]) {
            if (!max) max = time[i - 1];
            if (max < time[i]) {
                res += max;
                max = time[i];
            } else {
                res += time[i];   
            }
        } else {
            max = 0;
        }
    }
    
    return res;
};