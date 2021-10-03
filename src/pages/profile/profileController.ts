import UserService from '../../services/userService';

type objWithSnakeKeys = Record<string, any>;
const snakeToCamel = (s: string) => s.replace(/(_\w)/g, (k) => k[1].toUpperCase());
const convertObj = (obj: objWithSnakeKeys) => Object.entries(obj)
  // eslint-disable-next-line no-param-reassign
  .reduce((x: objWithSnakeKeys, [k, v]) => (x[snakeToCamel(k)] = v) && x, {});

export default class ProfileController {
  userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  static getProfileData() {
    return convertObj(UserService.getUserInfo());
  }
}
