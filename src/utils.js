import {FilterOperation, GuitarType, SortingOrder, StringsCount, StringsPerGuitar, StringTextNumberMap} from "./const";

export const extend = (a, b) => Object.assign({}, a, b);

export const isEscKeyPressed = (evt) => (evt.key === `Escape` || evt.key === `Esc`);

export const formatDecimal = (value) => {
  const formatter = new Intl.NumberFormat(`ru-RU`, {
    style: `decimal`,
  });

  return formatter.format(value);
};

export const formatDecimalWithRublesChar = (value) => {
  return `${formatDecimal(value)} ₽`;
};

export const capitalizeFirstLetter = (value) => {
  return value[0].toUpperCase() + value.slice(1);
};

export const getGuitarStringsText = (strings) => `${StringTextNumberMap[strings]} струнная`;


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

export const createFilterChangeHandler = (action, filterValue, dependentFilterChangeHandler) => {
  return (evt) => {
    const value = evt.target.dataset.value;
    const operation = evt.target.checked ? FilterOperation.ADD : FilterOperation.DELETE;

    dependentFilterChangeHandler(value, operation, action);
    action(filterValue, operation, value);
  };
};

export const selectAdjacentStringsByType = ((accumulator, value) => {
  StringsPerGuitar[value].forEach((item) => {
    accumulator[item] = item;
  });

  return accumulator;
});

export const selectAdjacentTypesByStrings = ((accumulator, value) => {
  StringsPerGuitar[value].forEach((item) => {
    accumulator[item] = item;
  });

  return accumulator;
});

export const getAvailableStringsForCurrentGuitarTypes = (currentFilterTypes) => {
  return currentFilterTypes.length
    ? currentFilterTypes.reduce(selectAdjacentStringsByType, {})
    : StringsCount;
};

export const getAvailableTypesForCurrentGuitarStrings = (filterStrings) => {
  const filterStringsLength = Object.values(filterStrings).length;
  let result = GuitarType;

  if (filterStringsLength) {
    const guitarTypes = Object.values(GuitarType);
    result = guitarTypes.reduce((accumulator, value) => {
      StringsPerGuitar[value].forEach((item) => {
        if (item in filterStrings) {
          accumulator[value] = value;
        }
      });

      return accumulator;
    }, {});
  }

  return result;
};

export const createDisabledFiltersDeletionCallback = (filterTypeData) => {
  const {
    changedFilters,
    filtersToBeDeleted,
    getAvailableValuesForChangedFilter,
    changedFitlerSetter,
    needsConvertingToList,
  } = filterTypeData;

  return (currentItem, operation) => {
    if (operation === FilterOperation.ADD) {
      const newChangedFilters = Object.assign({}, changedFilters);
      const newFiltersToBeDeleted = Object.assign({}, filtersToBeDeleted);
      newChangedFilters[currentItem] = currentItem;

      const changedFiltersStruct = needsConvertingToList
        ? Object.values(newChangedFilters)
        : newChangedFilters;

      const newAvailableTypes = getAvailableValuesForChangedFilter(changedFiltersStruct);
      for (const type in newFiltersToBeDeleted) {
        if (!(type in newAvailableTypes)) {
          delete newFiltersToBeDeleted[type];
        }
      }

      changedFitlerSetter(newFiltersToBeDeleted);
    }
  };
};


export const removeGuitar = (guitars, guitarId) => {
  const newGuitars = guitars.slice();
  const guitarIndex = guitars.findIndex((guitar) => Number(guitar.id) === guitarId);

  newGuitars.splice(guitarIndex, 1);

  return newGuitars;
};

export const getGuitarById = (guitars, guitarId) => {
  const newGuitars = guitars.slice();
  const foundGuitar = newGuitars.find((guitar) => Number(guitar.id) === guitarId);

  return Object.assign({}, foundGuitar);
};

export const getGuitarsWithChangedGuitarsAmountById = (guitars, guitarId, amount) => {
  const newGuitars = guitars.slice();
  const exactGuitar = newGuitars.find((guitar) => Number(guitar.id) === guitarId);
  exactGuitar.amount = amount;

  return newGuitars;
};

export const calculateTotalPrice = (guitars) => {
  return guitars.reduce((accumulator, guitar) => {
    return accumulator + (guitar.price * guitar.amount);
  }, 0);
};


export const createBlocklayerClickHandler = (closeAction) => {
  return (evt) => {
    if (evt.currentTarget === evt.target) {
      closeAction();
    }
  };
};
