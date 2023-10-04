import formidable from 'formidable';
import { AMO_IDS } from 'utils';
import { DateTime } from 'luxon';

const pushStringToArray = (title: string, value: string, arr: string[]) => {
  const string = `${title}:\n${value}`;
  return arr?.push(string);
};

const getMessage = (fields: any, urlToFiles: string[]) => {
  const arr: string[] = [];

  if (urlToFiles.length > 0) {
    const m = `Fisiere atasate:`;
    const filesMessage = urlToFiles.map((item) => `\n${item}`);
    arr.push(m + filesMessage);
  }

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
    pushStringToArray('Serviciu', fields?.service.name, arr);
  }

  if (fields?.country_apostille_requested) {
    pushStringToArray('Țara', fields?.country_apostille_requested, arr);
  }

  if (fields?.source_language) {
    pushStringToArray(
      'Din ce limba traducem',
      fields?.source_language.name,
      arr
    );
  }

  if (fields?.target_language) {
    pushStringToArray(
      'In ce limba traducem',
      fields?.target_language.name,
      arr
    );
  }

  if (fields?.date) {
    pushStringToArray('Termen livrare', fields?.date, arr);
  }

  if (fields?.delivery_time) {
    pushStringToArray('Termen livrare', fields?.delivery_time.name, arr);
  }

  if (fields?.comment) {
    pushStringToArray('Comentariu', fields?.comment, arr);
  }

  return arr.join('\n\n');
};

export const postAmoCRM = async (
  fields: formidable.Fields<string>,
  urlToFiles: string[]
) => {
  try {
    // @ts-ignore
    const data = JSON.stringify({
      token: process.env.AMO_TOKEN,
      client_id: process.env.AMO_CLIENT_ID,
      lead_name: 'Comanda noua ASA.md',
      pipeline_id: 5535283,
      status_id: 52083061,
      responsible_user_id: 8313577,
      tags: 'site, asa.md',
      contact: {
        name: fields?.name,
        email: fields?.email,
        phone: `${fields?.phone}`,
      },

      fields: {
        // @ts-ignore
        [AMO_IDS.services]: fields?.service ? fields?.service.amo_id : '',
        [AMO_IDS.sourceLanguages]: fields?.source_language
          ? // @ts-ignore
            fields?.source_language.amo_id
          : '',
        [AMO_IDS.targetLanguages]: fields?.target_language
          ? // @ts-ignore
            fields?.target_language.amo_id
          : '',
        [AMO_IDS.deliveryTime]: fields?.delivery_time
          ? // @ts-ignore
            fields?.delivery_time.amo_id
          : '',
        [AMO_IDS.comment]: fields?.comment ?? '',
        [AMO_IDS.countryApostilleRequested]:
          fields?.country_apostille_requested ?? '',

        ...(fields?.date && {
          [AMO_IDS.date]: DateTime.fromFormat(
            // @ts-ignore
            fields?.date,
            'dd.MM.yyyy'
          ).toUnixInteger(),
        }),
      },

      note: getMessage(fields, urlToFiles),
      stats: {
        FBCLID: 'IwAR0-Bn_8hPJAWlY39Q56vJAntfWw-0y0xUEckVz5gHfGGY_e9bQY91NH3vw',
        GCLIENTID: 'GA1.1.1055047466.1689929817',
        UTM_CAMPAIGN: 'test-amo',
      },
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
