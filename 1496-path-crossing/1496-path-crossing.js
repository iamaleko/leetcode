/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = (path) => {
    const set = new Set();
    let x = 10000, y = 10000;
    const cantor = (x, y) => (x + y) * (x + y + 1) / 2 + y;
    
    set.add(cantor(x,y));
    
    for (let d of path) {
        switch (d) {
            case 'N': --y; break;
            case 'S': ++y; break;
            case 'W': --x; break;
            case 'E': ++x; break;
        }
        
        if (set.has(d = cantor(x,y))) return true;
        set.add(d);
    }
    
    return false;
};