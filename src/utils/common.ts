import { GenericObject } from '../global/types';

export function snakeToCamelCase(obj: GenericObject) {
  const snakeToCamel = (s: string) => s.replace(/(_\w)/g, (k) => k[1].toUpperCase());
  return Object.entries(obj)
    .reduce((x: GenericObject, [k, v]) => (x[snakeToCamel(k)] = v) && x, {});
}

export function getFormData(form: HTMLFormElement) {
  const formData: FormData = new FormData(form);
  const formDataToDisplay = [...formData.entries()].reduce((prev: GenericObject, [k, v]) => {
    prev[k] = v;
    return prev;
  }, {});
    // eslint-disable-next-line no-console
  console.log(formDataToDisplay);
}
