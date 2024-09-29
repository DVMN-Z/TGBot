const config = require('./config.json');
const token = config.private.bot.token;

const { Bot, GrammyError, HttpError } = require('grammy');
const bot = new Bot(token);

bot.stop()

bot.catch((err) => {
    const ctx = err.ctx
    console.error(`Возникла ошибка с обновлением ${ctx.update.update_id}: `);

    const e = err.error;
    if (e instanceof GrammyError) {
        console.error('Ошибка с запросом: ', e.description);
    } else if (e instanceof HttpError) {
        console.error('Ошибка с подключением: ', e.description);
    } else {
        console.error('Незвестная ошибка: ', e);
    }
});

/*
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
*/
bot.start();
