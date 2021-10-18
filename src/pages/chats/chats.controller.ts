import ChatsService from '../../services/chatsService';

type objWithSnakeKeys = Record<string, any>;
const snakeToCamel = (s: string) => s.replace(/(_\w)/g, (k) => k[1].toUpperCase());
const convertObj = (obj: objWithSnakeKeys) => Object.entries(obj)
  // eslint-disable-next-line no-param-reassign
  .reduce((x: objWithSnakeKeys, [k, v]) => (x[snakeToCamel(k)] = v) && x, {});

export default class ChatsListController {
  chatsService: ChatsService;

  constructor() {
    this.chatsService = new ChatsService();
  }

  static getChatsData(): Record<string, any> {
    return ChatsService.getChats().map((chat) => convertObj(chat));
  }
}
