type FormFields = Record<string, any>;

export const createIndexWithZeros = (index: number) => {
  const totalSymbols = 5;
  const indexLength = index.toString().length;
  const diff = totalSymbols - indexLength;
  return "0".repeat(diff) + index;
};

const getIndexWithoutZeros = (value: string) => {
  return value.slice(5, value.length);
};

export const prepareFieldsToSend = (tabs: FormFields) => {
  return Object.entries(tabs).map(([uuid, fields]) => {
    const resultFields = Object.keys(fields)
      .sort()
      .map((fieldKey) => {
        const [, type] = fieldKey.split("&");
        return { type, data: fields[fieldKey] };
      });

    return {
      templateTabUuid: getIndexWithoutZeros(uuid),
      fields: resultFields,
    };
  });
};
