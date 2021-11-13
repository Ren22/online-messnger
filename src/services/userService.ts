import { Request } from '../utils/request';
import { GenericObject } from '../global/types';
import { UpdateUserInfo } from '../pages/profile/types';

export default class UserService {
  request: Request;
  baseUrl: string;
  constructor() {
    this.request = new Request();
    this.baseUrl = 'https://ya-praktikum.tech/api/v2';
  }

  // todo: provide a concrete type here
  signIn(userCredentials: GenericObject): Promise<XMLHttpRequest> {
    return this.request.post(`${this.baseUrl}/auth/signIn`, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      data: userCredentials,
    });
  }
  // todo: provide a concrete type here
  signUp(userData: GenericObject) {
    return this.request.post(`${this.baseUrl}/auth/signUp`, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      data: userData,
    });
  }

  getUserInfo() {
    return this.request.get(`${this.baseUrl}/auth/user`);
  }

  updateUserData(userData: UpdateUserInfo) {
    return this.request.put(`${this.baseUrl}/user/profile`, {
      data: userData,
    });
  }

  logOut() {
    return this.request.post(`${this.baseUrl}/auth/logout`);
  }
}
