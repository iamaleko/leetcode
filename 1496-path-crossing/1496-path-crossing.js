/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = (path) => {
    const set = new Set();
    let x = 10000, y = 10000;
    const key = (x, y) => (x << 14) + y;
    
    set.add(key(x,y));
    
    for (let d of path) {
        switch (d) {
            case 'N': --y; break;
            case 'S': ++y; break;
            case 'W': --x; break;
            case 'E': ++x; break;
        }
        
        if (set.has(d = key(x, y))) return true;
        set.add(d);
    }
    
    return false;
};