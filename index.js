const config = require('./config.json');
const token = config.private.bot.token;

const { Bot, GrammyError, HttpError, InlineKeyboard } = require('grammy');
const bot = new Bot(token);

const fs = require('fs');

function loadfiles(err, fl) {
    if (err) {console.error(err);}
    
    let js = files.filter(f => f.split('.').pop() === 'js');
    if (js.lenght <= 0) {
        return console.log("[!] => Не удалось загрузить команды, так как нет файлов команд для загрузки!");
    }
    js.forEach((f, i) => {
        let pull = require('')
    });
}

fs.readdir('./modules/ru/', (err, fl) => {
    if (err) {console.error(err);}
    
    let js = files.filter(f => f.split('.').pop() === 'js');
    if (js.lenght <= 0) {
        return console.log("[!] => Не удалось загрузить команды, так как нет файлов команд для загрузки!");
    }
    js.forEach((f, i) => {
        let pull = require(`./modules/ru/${f}`);
    });
});

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

const select_lang_InlineKeyboard = new InlineKeyboard()
.text('🇷🇺    RUS    🇷🇺', 'button_lang_ru')
.text('🇺🇸    ENG    🇺🇸', 'button_lang_en');


bot.command(['start', 'change_lang'], async (c) => {
    await c.reply("Выберите язык    |    Select your language", {
        reply_markup:select_lang_InlineKeyboard,
    });
});

bot.callbackQuery('button_lang_ru', async (c) => {
    await c.reply('Я понял, вы хотите быть русским =)');
});

bot.callbackQuery('button_lang_en', async (c) => {
    await c.reply('Okay, I get you =)');
});

/*
bot.on('message', (c) => {
    console.log(c);
});
bot.command('getupdate', (c) => {
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
        c.reply('1');
    } else {
        c.reply('2');
    };
});
*/
bot.start();
