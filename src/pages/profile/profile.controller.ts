import UserService from '../../services/userService';
import { snakeToCamelCase } from '../../utils/common';
import { User, UpdateUserInfo } from './types';
import { isError } from '../../global/types';

export default class ProfileController {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  async getUserInfo() {
    let user = {};
    try {
      const res = await this.userService.getUserInfo();
      user = JSON.parse(res.response);
    } catch (error) {
      if (isError(error)) {
        throw new Error(error.message);
      }
    }
    return (snakeToCamelCase(user) as User);
  }

  async logOut() {
    try {
      await this.userService.logOut();
    } catch (error) {
      if (isError(error)) {
        throw new Error(error.message);
      }
    }
  }

  async updateUserData(userData: UpdateUserInfo) {
    try {
      await this.userService.updateUserData(userData);
    } catch (error) {
      if (isError(error)) {
        throw new Error(error.message);
      }
    }
  }
}
