const { ipcMain } = require('electron');

ipcMain.on('process-subtitles', (event, paths) => {
    console.log(paths);

    event.reply('process-subtitles', [
        { name: 'i', amount: 1234 },
        { name: 'you', amount: 900 },
        { name: 'he', amount: 853 },
        { name: 'among', amount: 130 },
        { name: 'us', amount: 174 },
    ]);
});

console.log('ok')