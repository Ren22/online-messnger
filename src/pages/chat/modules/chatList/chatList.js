import Handlebars from 'handlebars';
import chatList from './chatList.tmpl';
import './chatList.tmpl';
import './chatList.less';
import { generateSearchField } from '../../../../components/searchField/index'

const chatContacts = [
  {
    name: 'Name',
    lastMessage: 'Message',
    lastMessageTime: '20:05'
  },
  {
    name: 'Name 2',
    lastMessage: 'Message 2',
    lastMessageTime: '10:05'
  },
  {
    name: 'Name',
    lastMessage: 'Message',
    lastMessageTime: '20:05'
  },
  {
    name: 'Name 2',
    lastMessage: 'Message 2',
    lastMessageTime: '10:05'
  },
  {
    name: 'Name',
    lastMessage: 'Message',
    lastMessageTime: '20:05'
  },
  {
    name: 'Name 2',
    lastMessage: 'Message 2',
    lastMessageTime: '10:05'
  },
  {
    name: 'Name',
    lastMessage: 'Message',
    lastMessageTime: '20:05'
  },
  {
    name: 'Name 2',
    lastMessage: 'Message 2',
    lastMessageTime: '10:05'
  },
  {
    name: 'Name',
    lastMessage: 'Message',
    lastMessageTime: '20:05'
  },
  {
    name: 'Name 2',
    lastMessage: 'Message 2',
    lastMessageTime: '10:05'
  }
]

Handlebars.registerPartial('searchField', 
  generateSearchField());

const template = Handlebars.compile(chatList);

export default () => template({
  chatContacts: chatContacts
});