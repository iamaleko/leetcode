const checkInclusion = function(s1, s2) {
    if (s1.length > s2.length) return false;
    
    const m1 = {};
    const m2 = {};
    
    const check = () => {
        for (const k in m1) if(m1[k] !== m2[k]) return false;
        return true;
    }
    
    let l = 0, r = 0;
    
    for (; r < s1.length; ++r) {
        if (m1[s1[r]]) {
            ++m1[s1[r]]
        } else {
            m1[s1[r]] = 1;
        }
        if (m2[s2[r]]) {
            ++m2[s2[r]]
        } else {
            m2[s2[r]] = 1;
        }
    }
    
    for (; r <= s2.length; ++l, ++r) {
        if (check()) return true;
        if (m2[s2[l]]) --m2[s2[l]];
        if (m2[s2[r]]) {
            ++m2[s2[r]]
        } else {
            m2[s2[r]] = 1;
        }
    }
    
    return false;
};