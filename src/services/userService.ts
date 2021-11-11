import { Request } from '../utils/request';
import { GenericObject } from '../global/types';
import { RawUser } from '../pages/profile/types';

export default class UserService {
  request: Request;
  baseUrl: string;
  constructor() {
    this.request = new Request();
    this.baseUrl = 'https://ya-praktikum.tech/api/v2';
  }

  signIn(userCredentials: GenericObject): Promise<XMLHttpRequest> {
    return this.request.post(`${this.baseUrl}/auth/signIn`, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      data: userCredentials,
    });
  }

  signUp(userData: GenericObject) {
    return this.request.post(`${this.baseUrl}/auth/signUp`, {
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      data: userData,
    });
  }

  getUserInfo(): Promise<RawUser> {
    return this.request.get(`${this.baseUrl}/auth/user`, { withCredentials: true });
  }

  updateUserInfo(userData: RawUser): Promise<RawUser> {
    return this.request.put(`${this.baseUrl}/user/profile`, {
      withCredentials: true,
      data: userData,
    });
  }
}
