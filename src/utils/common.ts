export function snakeToCamelCase() {
  type objWithSnakeKeys = Record<string, any>;
  const snakeToCamel = (s: string) => s.replace(/(_\w)/g, (k) => k[1].toUpperCase());
  return (obj: objWithSnakeKeys) => Object.entries(obj)
    // eslint-disable-next-line no-param-reassign
    .reduce((x: objWithSnakeKeys, [k, v]) => (x[snakeToCamel(k)] = v) && x, {});
}
