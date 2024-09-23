const config = require('./config.json');
const token = config.private.bot.token;

const { Bot } = require('grammy');
const bot = new Bot(token);

bot.stop()


bot.command('who', (c) => {
    let b = c.update.message.from.id;
    let i = 0;
    let iend = Object.keys(config.users.owners).length;
    for (let ow in config.users.owners ) {
        let owid = config.users.owners[ow].id;
        if (b != owid) {
            i++;
        };
    };
    if (i != iend) {
        c.reply("Я владею этим ебаным селом");
    } else {
        c.reply('Ты не овнер. Прикольно да?');
    };
});

bot.start();
