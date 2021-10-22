import UserService from '../../services/userService';
import { snakeToCamelCase } from '../../utils/common';

type User = {
  id: number,
  firstName: string,
  secondName: string,
  displayName: string,
  login: string,
  email: string,
  phone: string,
  avatar: string,
}
export default class ProfileController {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  getProfileData() {
    return ([this.userService.getUserInfo()].map(snakeToCamelCase) as unknown as User);
  }
}
