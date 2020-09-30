const { ipcMain } = require('electron');

const pathsToRows = require('./pathToRows');
const prepareData = require('./prepareData');

ipcMain.on('process-subtitles', (event, paths) => {
    pathsToRows(paths)
        .then(prepareData)
        .then(console.log)
        .then(() => {
            event.reply('process-subtitles', [
                { name: 'i', amount: 1234 },
                { name: 'you', amount: 900 },
                { name: 'he', amount: 853 },
                { name: 'among', amount: 130 },
                { name: 'us', amount: 174 },
            ]);
        });
});
