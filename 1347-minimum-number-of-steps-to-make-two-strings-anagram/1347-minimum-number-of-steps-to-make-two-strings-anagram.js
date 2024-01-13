const minSteps = (s, t, m = {}, i = 0, n) => {
    for (n of s) n in m ? ++m[n] : m[n] = 1;
    for (n of t) m[n] ? --m[n] : ++i;
    return i;
};