import { stringify } from "qs";
// const escapeRegexCharacacters = (str) =>
//   str
//     .replace(/\\/g, "\\\\")
//     .replace(/\*/g, "\\*")
//     .replace(/\?/g, "\\?")
//     .replace(/\(/g, "\\(")
//     .replace(/\)/g, "\\)")
//     .replace(/\[/g, "\\[")
//     .replace(/\]/g, "\\]")
//     .replace(/\^/g, "\\^")
//     .replace(/\$/g, "\\$")
//     .replace(/\|/g, "\\|")
//     .replace(/\+/g, "\\+");

function mapFilters(passedFilters) {
  let mappedData = {
    filter: {
      where: {
        and: [],
        or: [],
      },
    },
  };

  const reducedFilters = passedFilters.reduce((reducedValue, current) => {
    const { type: operator, value } = current;
    if (reducedValue[current.field]) {
      if (current.subFields) {
        current.subFields.forEach((subField) =>
          reducedValue[current.field].push({
            operator,
            value,
            field: `$${current.field}.${subField}$`,
          })
        );
      } else {
        reducedValue[current.field].push({ operator, value });
      }
    } else {
      if (current.subFields) {
        reducedValue[current.field] = [];
        current.subFields.forEach((subField) =>
          reducedValue[current.field].push({
            operator,
            value,
            field: `$${current.field}.${subField}$`,
          })
        );
      } else {
        reducedValue[current.field] = [{ operator, value }];
      }
    }
    return reducedValue;
  }, {});
  Object.keys(reducedFilters).forEach((filterField) => {
    const fieldData = { or: [] };
    reducedFilters[filterField].forEach((element) => {
      let mappedFieldData = null;
      if (element.operator === "=") {
        mappedFieldData = { [filterField]: element.value };
      }

      if (element.operator === "in") {
        mappedFieldData = { [filterField]: { in: [...element.value] } };
      }
      if (element.operator === "contains") {
        mappedFieldData = { [filterField]: { contains: [element.value] } };
      }
      if (element.operator === "notContains") {
        mappedFieldData = {
          not: { [filterField]: { contains: [element.value] } },
        };
      }

      if (mappedFieldData === null) {
        mappedFieldData = {
          [element.field ? element.field : filterField]: {
            [element.operator]: element.value,
          },
        };
      }

      fieldData.or.push(mappedFieldData);
    });

    mappedData.filter.where.and.push(fieldData);
  });

  return mappedData;
}

export const queryStringBuilder = (
  limit = 0,
  offset = 0,
  searchArr = [],
  filterArr = [],
  sortObj = null,
  hasSearchValue = false
) => {
  let queryString = stringify(mapFilters(filterArr), { encode: false });

  if (limit > 0) {
    queryString += `&filter[limit]=${limit}`;
  }

  if (offset > 0) {
    queryString += `&filter[offset]=${offset}`;
  }

  if (queryString.length > 0) {
    queryString = `?${queryString}`;
  }

  if (sortObj && sortObj.order && sortObj.field) {
    queryString += `&filter[order]=${sortObj.field}%20${sortObj.order}`;
  }

  return queryString;
};
