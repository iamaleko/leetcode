/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = (path) => {
    let x = 10000, y = 10000;
    const set = new Set([(x << 15) + y]);
    
    for (let d of path) {
        switch (d) {
            case 'N': --y; break;
            case 'S': ++y; break;
            case 'W': --x; break;
            case 'E': ++x; break;
        }
        
        if (set.has(d = (x << 15) + y)) return true;
        set.add(d);
    }
    
    return false;
};