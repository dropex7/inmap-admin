type FormFields = Record<string, any>;

export const createIndexWithZeros = (index: number) => {
  const totalSymbols = 5;
  const indexLength = index.toString().length;
  const diff = totalSymbols - indexLength;
  return "0".repeat(diff) + index;
};

export const prepareFieldsToSend = (fields: FormFields) => {
  const fieldNames = Object.keys(fields).map((field) => field.split("&"));

  const tabs = fieldNames.reduce(
    (tabs, currentValue) =>
      tabs.includes(currentValue[0]) ? tabs : [...tabs, currentValue[0]],
    []
  );

  const tabsWithInfo: FormFields = {};
  tabs.forEach((tab) =>
    fieldNames
      .filter((field) => field[0] === tab)
      .forEach((filteredField) => {
        if (tab in tabsWithInfo) {
          tabsWithInfo[tab] = [
            ...tabsWithInfo[tab],
            { type: filteredField[2], index: filteredField[1] },
          ];
        } else {
          tabsWithInfo[tab] = [
            { type: filteredField[2], index: filteredField[1] },
          ];
        }
      })
  );

  return {
    tabs: Object.entries(tabsWithInfo).map((tabsWithInfo) => ({
      tabUuid: tabsWithInfo[0],
      fields: tabsWithInfo[1].map((field: any) => ({
        type: field.type,
        data: fields[`${tabsWithInfo[0]}&${field.index}&${field.type}`],
      })),
    })),
  };
};
