import ChatsService from '../../services/chatsService';

type objWithSnakeKeys = Record<string, any>;
const snakeToCamel = (s: string) => s.replace(/(_\w)/g, (k) => k[1].toUpperCase());
const convertObj = (obj: objWithSnakeKeys) => Object.entries(obj)
  // eslint-disable-next-line no-param-reassign
  .reduce((x: objWithSnakeKeys, [k, v]) => (x[snakeToCamel(k)] = v) && x, {});

type Chat = {
  id: number,
  title: string,
  avatar: string,
  unreadCount: number,
  firstName: string,
  secondName: string,
  time: string,
  content: string,
  // lastMessage: {
  //   user: {
  //     firstName: string,
  //     secondName: string,
  //     avatar: string,
  //     email: string,
  //     login: string,
  //     phone: string,
  //   },
  //   time: string,
  //   content: string,
  // },
}

export default class ChatsListController {
  chatsService: ChatsService;

  constructor() {
    this.chatsService = new ChatsService();
  }

  static getChatsData(): Chat[] {
    return ChatsService.getChats().map(chat => convertObj(chat));
  }
}
