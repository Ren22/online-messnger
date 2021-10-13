type Validators = Record<string, Record<string, any>>;

export class FormValidator {
  form: HTMLFormElement;
  validators: Validators;
  inputFields: HTMLInputElement[];
  isFormValid: boolean;
  submitElement: HTMLElement;
  constructor(form: HTMLFormElement, submitElement: HTMLElement, validators: Validators) {
    this.form = form;
    //  Collect all innput fields from the form
    this.inputFields = Array.from(this.form.getElementsByTagName('input'));
    this.validators = validators;
    this.isFormValid = false;
    this.submitElement = submitElement;
  }

  initialize() {
    this.validateOnEntry();
    this.validateOnSubmit();
  }

  validateOnEntry() {
    this.inputFields.forEach((field) => {
      const fieldId = field.getAttribute('id');
      const parentElem = field.parentElement?.querySelector('.error-message') as HTMLElement;
      if (fieldId && Object.keys(this.validators).includes(fieldId)) {
        field.addEventListener('focus', () => {
          if (field.classList.contains('invalidInputField')) {
            field.classList.remove('invalidInputField');
            parentElem.innerText = '';
          }
          this.isFormValid = true;
        });
        field.addEventListener('blur', (e) => {
          if (!this.validators[fieldId].regex.test(field.value)) {
            field.classList.add('invalidInputField');
            parentElem.innerText = this.validators[fieldId].errMsg;
            this.isFormValid = false;
            e.preventDefault();
          }
        });
      } else {
        throw new Error(`No validator found for the input: ${fieldId}`);
      }
    });
  }

  isFormValidStatus() {
    return this.isFormValid;
  }

  getFormData() {
    const loginFormData: FormData = new FormData(this.form);
    const toShow = [...loginFormData.entries()].reduce((prev: Record<string, any>, [k, v]) => {
      // eslint-disable-next-line no-param-reassign
      prev[k] = v;
      return prev;
    }, {});
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
