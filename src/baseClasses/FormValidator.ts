import { GenericObject } from '../global/types';

export class FormValidator {
  form: HTMLFormElement;
  inputFields: HTMLInputElement[];
  isValid: boolean;
  submitElement: HTMLElement;
  constructor(form: HTMLFormElement | null, submitElement: HTMLElement) {
    if (form) {
      this.form = form;
      //  Collect all innput fields from the form
      this.inputFields = Array.from(this.form.getElementsByTagName('input'));
      this.isValid = false;
      this.submitElement = submitElement;
    }
  }

  initialize() {
    this.validateOnSubmit();
  }

  isFormValid() {
    return this.isValid;
  }

  getFormData() {
    const loginFormData: FormData = new FormData(this.form);
    //  todo: use the same converting block everywhere
    const toShow = [...loginFormData.entries()].reduce((prev: GenericObject, [k, v]) => {
      // eslint-disable-next-line no-param-reassign
      prev[k] = v;
      return prev;
    }, {});
    // eslint-disable-next-line no-console
    console.log(toShow);
  }

  validateOnSubmit() {
    this.submitElement.addEventListener('click', () => {
      this.inputFields.forEach((field) => {
        field.dispatchEvent(new Event('blur'));
      });
      this.getFormData();
    });
  }
}
