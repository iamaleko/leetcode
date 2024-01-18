const climbStairs = (n, a = 1, b = 2) => {
    if (--n) {
        while (--n) a = (b += a) - a;
        return b;
    }
    return a;
}