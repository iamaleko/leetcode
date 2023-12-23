/**
 * @param {string} path
 * @return {boolean}
 */
const isPathCrossing = (path) => {
    let x = 10000, y = 10000;
    const map = {[(x << 15) + y]: null};
    
    for (const d of path) {
        switch (d) {
            case 'N': --y; break;
            case 'S': ++y; break;
            case 'W': --x; break;
            case 'E': ++x; break;
        }
        
        if ((x << 15) + y in map) return true;
        map[(x << 15) + y] = null;
    }
    
    return false;
};