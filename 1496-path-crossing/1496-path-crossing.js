/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = (path) => {
    let x = 10000, y = 10000;
    const set = new Set([(x << 15) + y]);
    
    for (const d of path) {
        switch (d) {
            case 'N': --y; break;
            case 'S': ++y; break;
            case 'W': --x; break;
            case 'E': ++x; break;
        }
        
        if (set.has((x << 15) + y)) return true;
        set.add((x << 15) + y);
    }
    
    return false;
};