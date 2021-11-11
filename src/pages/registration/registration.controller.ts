import UserService from '../../services/userService';
import { GenericObject, isError } from '../../global/types';

export class RegistrationController {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  async signUp(userData: GenericObject) {
    try {
      const userId = await this.userService.signUp(userData);
      console.log(userId);
    } catch (error) {
      // todo: create a component that will be popped up when an error occurs
      if (isError(error)) {
        throw new Error(error.message);
      }
    }
  }
}
