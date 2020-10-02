const { ipcMain } = require('electron');

const pathsToRows = require('./pathToRows');
const prepareData = require('./prepareData');
const groupWords  = require('./groupWords');

ipcMain.on('process-subtitles', (event, paths) => {
    pathsToRows(paths)
        .then(prepareData)
        .then(groupWords)
        .then(groupedWordsArray => {
            event.reply('process-subtitles', groupedWordsArray);
        });
});
