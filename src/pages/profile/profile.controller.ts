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
    return (snakeToCamelCase(this.userService.getUserInfo()) as User);
  }
}
