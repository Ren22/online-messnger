import UserService from '../../services/userService';
import { GenericObject, isError } from '../../global/types';

enum USER_LOGIN_STATUS {
  IS_LOGGED = 'OK'
}

export class LoginController {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  async signIn(userCredentials: GenericObject): Promise<boolean> {
    try {
      const res = await this.userService.signIn(userCredentials);
      return res === USER_LOGIN_STATUS.IS_LOGGED;
    } catch (error) {
      // todo: create a component that will be popped up when an error occurs
      if (isError(error)) {
        throw new Error(error.message);
      }
    }
    return false;
  }
}
