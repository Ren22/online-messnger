import { expect } from 'chai';
import { Router } from './router';
import { RegistrationPage } from '../pages/registration/index';
import LoginPage from '../pages/login/login';
import { ProfilePage } from '../pages/profile/index';
import { ChatsPage } from '../pages/chats/chats';

export default function hello(name: string) {
  return `Hello ${name}`;
}

describe('Router navigation', () => {
  beforeEach(() => {
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

  it('should check that going back to the prev page reduces length in History API', () => {
    // Given
    const mockedRouter_ = new Router('.app')
      .use('/', new LoginPage())
      .use('/sign-up', new RegistrationPage())
      .use('/settings', new ProfilePage())
      .use('/messenger', new ChatsPage());
    // When
    mockedRouter_.go('/');
    // mockedRouter_.go('/sign-up');
    mockedRouter_.back();
    // Then
    expect(mockedRouter_.history.length).equal(2);
  });
});
