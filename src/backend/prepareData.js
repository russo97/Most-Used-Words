module.exports = rows => {
    return new Promise((resolver, reject) => {
        try {
            const words = rows
                .filter(filterValidRow)
                .map(removePonctuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(' ')
                .map(word => word.toLowerCase())
                .map(word => word.replace('"', ''));

            resolver(words);
        } catch (e) {
            reject(e);
        }
    });
};

function filterValidRow (row) {
    const noSpaces    = row.trim();
    const notEmpty    = !!noSpaces;
    const notNumber   = !parseInt(noSpaces);
    const notInterval = !noSpaces.includes('-->');

    return notEmpty && notNumber && notInterval;
}

const removePonctuation = row => row.replace(/[,?!.-]/g, '');

const removeTags = row => row.replace(/(<[^>]+)\/?>/gi, '').trim();

const mergeRows = (fullText, row) => `${fullText} ${row}`;
