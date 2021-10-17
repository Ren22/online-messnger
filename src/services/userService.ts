import { Request } from '../utils/request';

export default class UserService {
  request: Request;
  constructor() {
    this.request = new Request();
  }

  getUserInfo() {
    return {
      id: 123,
      first_name: 'Petya',
      second_name: 'Pupkin',
      display_name: 'Petya Pupkin',
      login: 'userLogin',
      email: 'my@email.com',
      phone: '89223332211',
      avatar: '/path/to/avatar.jpg',
    };
  }
}
