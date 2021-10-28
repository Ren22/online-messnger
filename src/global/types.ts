export type GenericObject = Record<string, any>;

export type CallBack = (...args: any) => void;

export interface Form extends HTMLCollectionOf<HTMLFormElement>{
  loginForm: HTMLFormElement,
  registrationForm: HTMLFormElement,
  profileForm: HTMLFormElement
}
