const isUgly = (n) => {
    if (n <= 0) return false;
    let d = 2;
    while (n > 1) {
        if (n % d === 0) {
            if (d === 4 || d > 5) return false;
            n /= d;
        } else if (++d > 5) {
            return false;
        }
    }
    return true; 
};