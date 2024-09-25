export type SearchQueryAllowedTypes = string | number | boolean | undefined;

export type SearchQueryValues =
  | SearchQueryAllowedTypes
  | SearchQueryArray
  | { [key: string]: SearchQueryAllowedTypes[] };

// problem: Type alias 'SearchQueryArray' circularly references itself.
// solution: https://stackoverflow.com/questions/36966444/how-to-create-a-circularly-referenced-type-in-typescript
// todo: Update typescript to the latest version
// export type SearchQueryArray = Array<
//   | SearchQueryAllowedTypes
//   | SearchQueryArray
// >
// A temporary fix of the issue described above
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface SearchQueryArray extends Array<SearchQueryValues> {}

export type SearchQueryObject = {
  [key: string]: SearchQueryValues;
};

function applyParam(
  urlSearchParams: URLSearchParams,
  param: string,
  value: SearchQueryValues,
  depth = 0,
) {
  if (Array.isArray(value)) {
    value.forEach((v) => applyParam(urlSearchParams, param, v, depth + 1));

    // Object of arrays
  } else if (value && typeof value === 'object') {
    Object.keys(value).forEach((key) => {
      applyParam(urlSearchParams, `${param}[${key}]`, value[key]);
    });
  } else if (typeof value !== 'undefined') {
    urlSearchParams.append(param + '[]'.repeat(depth), `${value}`);
  }
}

export default function objectToURLSearchParams(
  query: SearchQueryObject,
  urlSearchParams = new URLSearchParams(),
): URLSearchParams {
  Object.entries(query).forEach(([param, value]) => {
    applyParam(urlSearchParams, param, value);
  });
  return urlSearchParams;
}
