import {FilterOperation, SortingOrder} from "./const";

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

export const createSortByProperty = (property) => (guitarA, guitarB) => guitarA[property] - guitarB[property];

export const createSortingByProperty = (property, order) => {
  return (guitarA, guitarB) => {
    let result = guitarA[property] - guitarB[property];

    if (order === SortingOrder.DESC) {
      result *= -1;
    }

    return result;
  };
};

export const createSortingByPrice = (order) => createSortingByProperty(`price`, order);
export const createSortingByPopularity = (order) => createSortingByProperty(`reviewsCount`, order);

export const sortByPrice = createSortByProperty(`price`);
export const sortByPopularity = createSortByProperty(`reviewsCount`);


export const packNumberInMinMax = (value, min, max) => {
  let newValue = value < min ? min : value;
  newValue = newValue > max ? max : newValue;

  return newValue;
};


export const dispatchFilterChange = (dispatch, actonCreator) => {
  return (activeFilters, operation, value) => {
    const newFilters = Object.assign({}, activeFilters);

    switch (operation) {
      case FilterOperation.ADD:
        newFilters[value] = value;
        break;
      case FilterOperation.DELETE:
        delete newFilters[value];
        break;
    }

    dispatch(actonCreator(newFilters));
  };
};
