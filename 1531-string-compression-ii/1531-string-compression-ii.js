const getLengthOfOptimalCompression = (s, k) => {
    const mem = new Map()
    const next = (l, r, repeats, k) => {
        if (k < 0) return Number.POSITIVE_INFINITY
        if (r === s.length) return 0
        
        let key = ((((1 + l) << 7) + r << 7) + repeats << 7) + k; // 100 это 7 бит, каждый аргумент <= 100
        if (key in mem) return mem[key]
        
        let res; // сколько занимает сокращенная строка до данного r
        if (s[l] === s[r]) {
            ++repeats;
            // достижение 2 / 10 / 100 потворений даёт прирастание на 1 символ в сжатом виде:
            // a -> a2
            // a9 -> a10
            // a99 -> a100
            res = (repeats === 2 || repeats === 10 || repeats === 100 ? 1 : 0) + next(r, r + 1, repeats, k)
        } else {
            res = Math.min(
                1 + next(r, r + 1, 1, k), // продолжаем оставив букву
                next(l, r + 1, repeats, k - 1) // продолжаем удалив букву
            )
        }
        
        mem[key] = res;
        return res;
    }
    
    return next(-1, 0, 0, k)
}