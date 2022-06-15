export const cleanInputValue = (inputValue) => {
  let newInput = inputValue.toLowerCase();
  const result = newInput.charAt(0).toUpperCase() + newInput.slice(1);
  return result;
};

export const pathGet = (a, query) => {
  const findKeyInObj = (val) => {
    const result = {};
    for (const key in val) {
      if (typeof val[key] === "object" && !Array.isArray(val[key])) {
        const newObj = findKeyInObj(val[key]);
        for (const newKey in newObj) {
          result[`${key}.${newKey}`] = newObj[newKey];
        }
      } else {
        result[key] = val[key];
      }
    }
    return result;
  };
  const flattenedObject = findKeyInObj(a);
  for (const key in flattenedObject) {
    if (flattenedObject[key] === query) {
      return key;
    }
  }
};



