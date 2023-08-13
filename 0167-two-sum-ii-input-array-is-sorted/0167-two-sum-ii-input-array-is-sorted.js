const twoSum = (n, t) => {
    let z,
        l = 0,
        r = n.length - 1;
    
    while (true) {
        z = n[l] + n[r]
        if (z == t) return [l + 1, r + 1]
        z < t ? ++l : --r
    }
};