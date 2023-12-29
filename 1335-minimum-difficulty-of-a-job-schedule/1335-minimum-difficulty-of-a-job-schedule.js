/**
 * @param {number[]} jobDifficulty
 * @param {number} d
 * @return {number}
 */
const minDifficulty = (j, d) => {   
    if (j.length < d) return -1;
    
    const map = new Map();
    const next = (i,k) => {
        if (j.length - i < k) return -1;
        
        let key = i+' '+k;
        if (key in map) return map[key];
        
        let max = -Infinity;
        if (k === 1) {
            for (; i < j.length; i++) max = Math.max(max, j[i]); 
            return max; 
        };
        
        let min = Infinity;
        for (; i < j.length - k + 1; i++) {
            const nv = next(i + 1, k - 1);
            max = Math.max(max, j[i])
            min = Math.min(min, max + nv);
        }
        
        return map[key] = min;
    }
    
    return next(0,d)
};