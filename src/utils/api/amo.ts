import formidable from 'formidable';

const pushStringToArray = (title: string, value: string, arr: string[]) => {
  const string = `${title}:\n${value}`;
  return arr?.push(string);
};

const getMessage = (fields: any, urlToFiles: string[]) => {
  const arr: string[] = [];

  if (fields?.name) {
    pushStringToArray('Client', fields?.name, arr);
  }

  if (fields?.phone) {
    pushStringToArray('Telefon', fields?.phone, arr);
  }

  if (fields?.email) {
    pushStringToArray('E-mail', fields?.email, arr);
  }

  if (fields?.service) {
    pushStringToArray('Serviciu', fields?.service, arr);
  }

  if (fields?.country_apostille_requested) {
    pushStringToArray('Țara', fields?.country_apostille_requested, arr);
  }

  if (fields?.source_language) {
    pushStringToArray('Din ce limba traducem', fields?.source_language, arr);
  }

  if (fields?.target_language) {
    pushStringToArray('In ce limba traducem', fields?.target_language, arr);
  }

  if (fields?.date) {
    pushStringToArray('Termen livrare', fields?.date, arr);
  }

  if (fields?.delivery_time) {
    pushStringToArray('Termen livrare', fields?.delivery_time, arr);
  }

  if (fields?.comment) {
    pushStringToArray('Comentariu', fields?.comment, arr);
  }

  if (urlToFiles.length > 0) {
    const m = `Fisiere atasate:`;
    const filesMessage = urlToFiles.map((item) => `\n${item}`);
    arr.push(m + filesMessage);
  }
  return arr.join('\n\n');
};

export const postAmoCRM = async (
  fields: formidable.Fields<string>,
  urlToFiles: string[]
) => {
  try {
    const data = JSON.stringify({
      token: process.env.AMO_TOKEN,
      client_id: process.env.AMO_CLIENT_ID,
      contact: {
        // @ts-ignore
        name: fields?.name[0],
        // @ts-ignore
        phone: fields?.phone[0],
      },

      note: getMessage(fields, urlToFiles),
    });

    const config = {
      method: 'POST',
      url: 'https://platon.progression.md/v4/app/forms.crm.add',
      headers: {
        'Content-Type': 'application/json',
      },
      data,
    };

    await fetch(config.url, {
      method: config.method,
      headers: config.headers,
      body: config.data,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok AMO');
        }
        return response.json();
      })
      .then((data) => {
        console.error('amoCRM data: ', data);
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  } catch (e) {
    console.error('amoCRM', e);
  }
};
