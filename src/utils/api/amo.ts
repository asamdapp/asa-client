import formidable from 'formidable';

export const postAmoCRM = async (
  fields: formidable.Fields<string>,
  urlToFiles: string[]
) => {
  try {
    const { name, email, phone, ...restFields } = fields;
    const data = JSON.stringify({
      token: '7cc418e5-ad94-42cc-affd-13f5c0e99a98',
      client_id: 30248032,
      contact: {
        name,
        email,
        phone,
      },
      fields: {
        files: urlToFiles,
        ...restFields,
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

    const amo = await fetch(config.url, {
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
