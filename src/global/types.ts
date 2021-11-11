export type GenericObject<T = unknown> = {
  [key in string]: T
}

export type CallBack = (...args: any) => void;
export interface Form extends HTMLCollectionOf<HTMLFormElement>{
  loginForm: HTMLFormElement,
  registrationForm: HTMLFormElement,
  profileForm: HTMLFormElement,
  conversationForm: HTMLFormElement,
}

export function isError(x: any): x is Error {
  return x instanceof Error;
}
