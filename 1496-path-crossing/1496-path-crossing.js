/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = (path) => {
    const map = new Map();
    let x = 0, y = 0;
    
    map.set(x, new Set());
    map.get(x).add(y);
    
    for (const d of path) {
        if (d === 'N') { --y; } else
        if (d === 'S') { ++y; } else
        if (d === 'W') { --x; } else
        if (d === 'E') { ++x; }
        
        if (map.has(x)) {
            if (map.get(x).has(y)) return true;
        } else {
            map.set(x, new Set());
        }
        map.get(x).add(y);
    }
    
    return false;
};