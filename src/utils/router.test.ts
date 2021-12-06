import { expect, assert } from 'chai';
import sinon from 'sinon';
import { RegistrationPage } from 'pages/registration/index';
import LoginPage from 'pages/login/login';
import { ProfilePage } from 'pages/profile/index';
import { ChatsPage } from 'pages/chats/chats';
import ErrorPage from 'pages/error/error';
import { Router } from './router';

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

// function firePopstateOnRoute(window: Window): void {
//   const { history } = window;
//   const originalBack = history.back;
//   const originalForwards = history.forward;
//   // const states: { [key in string]: [string, string] }[] = [];

//   // eslint-disable-next-line no-proto
//   (history as unknown as {__proto__: History}).__proto__.back =
//  function patchedBack(this: History, ...args: Parameters<History['back']>): void {
//     originalBack.apply(this, args);

//     const popStateEvent = document.createEvent('Event');
//     popStateEvent.initEvent('popstate', true, true);
//     window.dispatchEvent(popStateEvent);
//     // states.splice(-1);
//   };

//   // eslint-disable-next-line no-proto
//   (history as unknown as {__proto__: History}).__proto__.go =
// function patchedGo(this: History, ...args: Parameters<History['forward']>): void {
//     originalForwards.apply(this, args);

//     const popStateEvent = document.createEvent('Event');
//     popStateEvent.initEvent('popstate', true, true);
//     window.dispatchEvent(popStateEvent);
//   };

//     (history as unknown as {__proto__: History}).__proto__.go =
// function patchedGo(this: History, ...args: Parameters<History['forward']>): void {
//     originalForwards.apply(this, args);

//     const popStateEvent = document.createEvent('Event');
//     popStateEvent.initEvent('popstate', true, true);
//     window.dispatchEvent(popStateEvent);
//   };
// }

// function mockHistoryMethods(history: History) {
//   sinon.spy(history, 'pushState');
// }

describe('Router navigation', () => {
  beforeEach(() => {
    const { window } = new JSDOM('<!DOCTYPE html><head></head><p>Fake document</p>', {
      url: 'http://localhost:3000/',
    });
    // firePopstateOnRoute(window);
    // mockHistoryMethods(window.history);
    global.document = window.document;
    global.window = window;
  });

  afterEach(() => {
    // window.close();
    Router.reset();
  });

  it('should check that method use adds all paths to routes', () => {
    // Given
    const mockedRouter = new Router('.app');
    mockedRouter
      .use('/', new LoginPage())
      .use('/sign-up', new RegistrationPage())
      .use('/settings', new ProfilePage())
      .use('/messenger', new ChatsPage())
      .use('/404', new ErrorPage({ errorCode: 404, desc: 'Sorry, but this page does not exist' }))
      .use('/500', new ErrorPage({ errorCode: 500, desc: 'We are working to fix the problem!' }))
      .start();
    // When
    // Then
    expect(mockedRouter.routes.length).equal(6);
  });

  it.skip('should check that new page changes History API', () => {
    // Given
    const mockedRouter = new Router('.app');
    mockedRouter
      .use('/', new LoginPage());
    // When
    mockedRouter.go('/');
    // Then
    assert.deepEqual(mockedRouter.history.state, { page: '/' });
    expect(mockedRouter.history.length).equal(2);
  });

  it.skip('should check that going back to the prev page does not reduce history length', () => {
    // Given
    const mockedRouter = new Router('.app')
      .use('/', new LoginPage())
      .use('/sign-up', new RegistrationPage());
    // When
    mockedRouter.go('/');
    mockedRouter.go('/sign-up');
    mockedRouter.back();
    // Then
    assert.deepEqual(mockedRouter.history.state, { page: '/' });
    expect(mockedRouter.history.length).equal(3);
  });

  it.skip('should check that going forward to the prev page does not change history length', () => {
    // Given
    const mockedRouter = new Router('.app')
      .use('/', new LoginPage())
      .use('/sign-up', new RegistrationPage());
    // When
    mockedRouter.go('/');
    mockedRouter.go('/sign-up');
    mockedRouter.forward();
    // Then
    assert.deepEqual(mockedRouter.history.state, { page: '/sign-up' });
    expect(mockedRouter.history.length).equal(3);
  });

  it.skip('should check that going forward and backward does not change history length', () => {
    // Given
    const mockedRouter = new Router('.app')
      .use('/', new LoginPage())
      .use('/sign-up', new RegistrationPage());
    // When
    mockedRouter.go('/');
    mockedRouter.go('/sign-up');
    mockedRouter.back();
    mockedRouter.forward();
    // Then
    assert.deepEqual(mockedRouter.history.state, { page: '/sign-up' });
    expect(mockedRouter.history.length).equal(3);
  });

  it('should check that getRoute is called once when starting a router', () => {
    // Given
    const mockedLoginPage = new LoginPage();
    // sinon.stub(mockedLoginPage, 'render').callsFake(() => document.createDocumentFragment());
    const mockedRouter = new Router('.app')
      .use('/', mockedLoginPage);
    const spy = sinon.spy(mockedRouter, 'getRoute');
    // When
    mockedRouter.start();
    // Then
    expect(spy.calledOnce).to.equal(true);
  });
});
