import UserService from '../../services/userService';
import { snakeToCamelCase } from '../../utils/common';
import { User } from './types';

type UserCredentials = {
  login: string,
  password: string
}

export default class ProfileController {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  async getProfileData() {
    const userData = await this.userService.getUserInfo();
    return (snakeToCamelCase(userData) as User);
  }
}
