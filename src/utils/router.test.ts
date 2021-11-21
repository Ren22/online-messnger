import { expect } from 'chai';
import { Router } from './router';
import { RegistrationPage } from '../pages/registration/index';
import LoginPage from '../pages/login/login';
import { ProfilePage } from '../pages/profile/index';
import { ChatsPage } from '../pages/chats/chats';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

export default function hello(name: string) {
  return `Hello ${name}`;
}

function firePopstateOnRoute(window: Window): void {
  const { history } = window;
  const originalBack = history.back;
  const originalForwards = history.forward;

  // eslint-disable-next-line no-proto
  (history as unknown as {__proto__: History}).__proto__.back = function patchedBack(this: History, ...args: Parameters<History['back']>): void {
    originalBack.apply(this, args);

    const popStateEvent = document.createEvent('Event');
    popStateEvent.initEvent('popstate', true, true);
    window.dispatchEvent(popStateEvent);
  };

  // eslint-disable-next-line no-proto
  (history as unknown as {__proto__: History}).__proto__.forward = function patchedForward(this: History, ...args: Parameters<History['forward']>): void {
    originalForwards.apply(this, args);

    const popStateEvent = document.createEvent('Event');
    popStateEvent.initEvent('popstate', true, true);
    window.dispatchEvent(popStateEvent);
  };
}

describe('Router navigation', () => {
  beforeEach(() => {
    const { window } = new JSDOM('<!DOCTYPE html><head></head><p>Fake document</p>', {
      url: 'http://localhost/',
    });
    firePopstateOnRoute(window);
    global.document = window.document;
    global.window = window;
  });

  afterEach(() => {
    window.close();
    Router.reset();
  });

  it('should check that new page changes History API', () => {
    // Given
    const mockedRouter = new Router('.app');
    mockedRouter
      .use('/', new LoginPage());
    // When
    mockedRouter.go('/');
    // Then
    expect(mockedRouter.history.length).equal(2);
  });

  it('should check that going back to the prev page does not reduce history length', () => {
    // Given
    const mockedRouter_ = new Router('.app')
      .use('/', new LoginPage())
      .use('/sign-up', new RegistrationPage())
      .use('/settings', new ProfilePage())
      .use('/messenger', new ChatsPage());
    // When
    mockedRouter_.go('/');
    mockedRouter_.go('/sign-up');
    mockedRouter_.back();
    // Then
    expect(mockedRouter_.history.length).equal(3);
  });
});
