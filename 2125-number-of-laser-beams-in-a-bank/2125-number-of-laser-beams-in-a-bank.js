/**
 * @param {string[]} bank
 * @return {number}
 */
const numberOfBeams = (rows) => {
    let lasers = 0;
    let detectors = 0;
    for (const row of rows) {
        let _detectors = 0;
        for (const val of row) {
            if (val === '1') {
                lasers += detectors;
                ++_detectors;
            }
        }
        if (_detectors) detectors = _detectors;
    }
    return lasers;
};