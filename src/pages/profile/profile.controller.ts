import UserService from 'services/userService';
import { snakeToCamelCase } from 'utils/common';
import { User, UpdateUserInfo } from './types';

export default class ProfileController {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  async getUserInfo() {
    const user = await this.userService.getUserInfo();
    return (snakeToCamelCase(user) as User);
  }

  async logOut() {
    await this.userService.logOut();
  }

  async updateUserData(userData: UpdateUserInfo) {
    const newUserData = await this.userService.updateUserData(userData);
    return (snakeToCamelCase(newUserData) as User);
  }
}
