import UserService from 'services/userService';
import { GenericObject } from 'global/types';

export class RegistrationController {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  async signUp(userData: GenericObject) {
    try {
      await this.userService.signUp(userData);
    } catch (e) {
      throw new Error(e);
    }
  }
}
