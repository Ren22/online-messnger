import UserService from '../../services/userService';
import { GenericObject, isError, USER_LOGIN_STATUS } from '../../global/types';

export class LoginController {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  async signIn(userCredentials: GenericObject): Promise<boolean> {
    try {
      const res = await this.userService.signIn(userCredentials);
      return res.responseText === USER_LOGIN_STATUS.IS_LOGGED;
    } catch (error) {
      // todo: create a component that will be popped up when an error occurs
      if (isError(error)) {
        throw new Error(error.message);
      }
    }
    return false;
  }
}
