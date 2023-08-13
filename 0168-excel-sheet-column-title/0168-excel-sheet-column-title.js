/**
 * @param {number} columnNumber
 * @return {string}
 */
const convertToTitle = (n) => {
    const voc = ['', 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    let col = '';
    while (n > 26) {
        const chr = n % 26 || 26;
        col = voc[chr] + col;
        n = (n - chr) / 26; 
    }
    return n ? voc[n] + col : col;
};