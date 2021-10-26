export const loginRule = {
  regex: /^(?=[\S]+)(?=.*[^0-9 ].*)[a-zA-Z0-9_-]{3,20}$/,
  validationMessage: 'Login should be 3 to 20 symbols and not include special symbols exept for _ or -',
};

export const passwordRule = {
  regex: /^(?=.*[A-Z])(?=.*[0-9])[A-Za-z\d]{8,40}$/,
  validationMessage: 'Please provide a password of length from 8 to 40 with at least 1 capital letter and 1 digit',
};

// function (inputField: InputField, rules: Regex[]) {
//   inputField.
// }
