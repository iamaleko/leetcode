const findWinners = (matches) => {
    const winners = new Set();
    const losers = new Map();
    for (const [winner, loser] of matches) {
        winners.add(winner);
        losers.set(loser, (losers.get(loser) || 0) + 1);
    }
    const promising = [];
    for (const [loser, loses] of losers) {
        winners.delete(loser);
        if (loses === 1) promising.push(loser);
    }
    promising.sort((a, b) => a - b);
    return [
        Array.from(winners).sort((a, b) => a - b),
        promising,
    ];
};