export const extend = (a, b) => Object.assign({}, a, b);

export const formatDecimal = (value) => {
  const formatter = new Intl.NumberFormat(`ru-RU`, {
    style: `decimal`,
  });

  return formatter.format(value);
};

export const formatDecimalWithRublesChar = (value) => {
  return `${formatDecimal(value)} ₽`;
};
