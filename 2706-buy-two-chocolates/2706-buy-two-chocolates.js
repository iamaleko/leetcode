const buyChoco = (prices, money) => {
    let a = Number.MAX_SAFE_INTEGER, b = Number.MAX_SAFE_INTEGER;
    for (const price of prices) {
        if (price < a) {
            b = a;
            a = price;
        } else if (price < b) {
            b = price;
        }
    }
    return a && b && a + b <= money ? money - a - b : money;
};