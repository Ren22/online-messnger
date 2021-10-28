import notCompiledTemplate from './chatList.tmpl';
import './chatList.less';
import { Block } from '../../baseClasses/Block';
import { SearchField } from '../searchField/index';
import { Chat } from '../../pages/chats/chats.controller';
import { Link } from '../link/index';
import { navTo } from '../../utils/navigator';
import { RenderHelpers } from '../../baseClasses/RenderHelpers';

const Handlebars = require('handlebars');

type ChatListProps = {
  chatContacts: Chat[];
}

export class ChatList extends Block {
  searchField: SearchField;
  linkToProfile: Link;

  constructor(props: ChatListProps) {
    super('div', props);
  }

  componentDidMount() {
    this.searchField = new SearchField();
    this.linkToProfile = new Link({
      linkText: 'Profile',
      linkStyle: 'chatListContainer__profileLink',
      events: {
        click: this.onClickLinkToProfile.bind(this),
      },
    });
  }

  onClickLinkToProfile() {
    navTo('profilePage');
  }

  render() {
    const rh = new RenderHelpers();
    Handlebars.registerPartial('searchField', this.searchField.renderAsHTMLString());
    Handlebars.registerPartial('linkToProfile', this.linkToProfile.renderAsHTMLString());
    const template = Handlebars.compile(notCompiledTemplate);
    const templateHTML = template({ chatContacts: this.props.chatContacts });
    return rh.replaceElementsInHTMLTemplate(templateHTML,
      [this.searchField, this.linkToProfile],
    );
  }
}
