import { Telegraf } from 'telegraf';
import { telegrafThrottler } from 'telegraf-throttler';
import formidable from 'formidable';

const bot = new Telegraf(process.env.TELEGRAM_TOKEN as string);
const telegramChatId = process.env.TELEGRAM_CHAT_ID as string;

const throttler = telegrafThrottler({
  in: {
    // Aggresively drop inbound messages
    highWater: 0, // Trigger strategy if throttler is not ready for a new job
    maxConcurrent: 1, // Only 1 job at a time
    minTime: 30000, // Wait this many milliseconds to be ready, after a job
  },
});
bot.use(throttler);

const pushStringToArray = (
  emoji: string,
  title: string,
  value: string,
  arr: string[]
) => {
  const string = `${emoji}  <i><u>${title}:</u></i> <b>${value}</b>`;
  return arr?.push(string);
};

const getMessage = (fields: any) => {
  const arr: string[] = [];

  if (fields?.name) {
    pushStringToArray('👤', 'Client', fields?.name, arr);
  }

  if (fields?.phone) {
    pushStringToArray('📞', 'Telefon', fields?.phone, arr);
  }

  if (fields?.email) {
    pushStringToArray('📧', 'E-mail', fields?.email, arr);
  }

  if (fields?.service) {
    pushStringToArray('💼', 'Serviciu', fields?.service, arr);
  }

  if (fields?.country_apostille_requested) {
    pushStringToArray('🌏', 'Țara', fields?.country_apostille_requested, arr);
  }

  if (fields?.source_language) {
    pushStringToArray(
      '📗',
      'Din ce limba traducem',
      fields?.source_language,
      arr
    );
  }

  if (fields?.target_language) {
    pushStringToArray(
      '📘',
      'In ce limba traducem',
      fields?.target_language,
      arr
    );
  }

  if (fields?.date) {
    pushStringToArray('🗓', 'Termen livrare', fields?.date, arr);
  }

  if (fields?.delivery_time) {
    pushStringToArray('🗓', 'Termen livrare', fields?.delivery_time, arr);
  }

  if (fields?.comment) {
    pushStringToArray('💬', 'Comentariu', fields?.comment, arr);
  }
  console.log('!!fields?.comment', !!fields?.comment);
  return arr.join('\n\n');
};

export const sendMessageTelegramGroup = async (
  fields: formidable.Fields<string>,
  urlToFiles: string[]
) => {
  try {
    const message = getMessage(fields);

    await bot.telegram.sendMessage(
      telegramChatId,
      `<i>⬇️ START =&#62; ${fields?.name} &#62; &#62; &#62; &#62;</i>`,
      {
        parse_mode: 'HTML',
      }
    );

    await bot.telegram.sendMessage(telegramChatId, message, {
      parse_mode: 'HTML',
    });

    if (urlToFiles.length > 0) {
      for (const url of urlToFiles) {
        await bot.telegram.sendDocument(telegramChatId, url);
      }
    }

    await bot.telegram.sendMessage(
      telegramChatId,
      `<i>&#60; &#60; &#60; &#60; ${fields?.name} &#60;= END 🔼</i>`,
      {
        parse_mode: 'HTML',
      }
    );
  } catch (e) {
    console.error('Telegram', e);
  }
};
