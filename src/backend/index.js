const { ipcMain } = require('electron');

const pathsToRows = require('./pathToRows');

ipcMain.on('process-subtitles', (event, paths) => {
    pathsToRows(paths)
        .then(row => console.log(row))
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

console.log('ok')