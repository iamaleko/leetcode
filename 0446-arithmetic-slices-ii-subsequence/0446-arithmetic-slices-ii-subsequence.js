const numberOfArithmeticSlices = (n) => {
    if (n.length < 3) return 0;
    
    const dp = new Array(n.length).fill().map(() => new Map());
    let res = 0;
    
    for (let l = 0; l < n.length - 1; ++l) {
        for (let r = l + 1; r < n.length; ++r) {
            const diff = n[r] - n[l];
            let ls = dp[l][diff] || 0;
            let rs = dp[r][diff] || 0;

            dp[r][diff] = ls + rs + 1;
            
            res += ls;
        } 
    }

    return res;
};



