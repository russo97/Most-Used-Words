
module.exports = paths => {
    return new Promise((resolver, reject) => {
        try {
            const groupedWords = paths.reduce((obj, word) => {
                obj[word] = (obj[word] ? obj[word] : 0) + 1;

                return obj;
            }, {});

            const groupedWordsArray = Object
                .keys(groupedWords)
                .map(key => ({ name: key, amount: groupedWords[key] }))
                .sort((a, b) => b.amount - a.amount);

            resolver(groupedWordsArray);
        } catch (e) {
            reject(e);
        }
    }).catch(e => {
        console.log(e);
    });
};
