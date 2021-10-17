import EventBus from './EventBus';

export class Block {
  _element: HTMLElement;
  _meta: Record<string, any>;
  props: any;
  eventBus: () => EventBus;
  static eventBus: () => EventBus;;

  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_RENDER: 'flow:render',
    FLOW_CDU: 'flow:component-did-update',
  }

  constructor(tagName = 'div', props = {}) {
    const eventBus = new EventBus();
    this._meta = {
      tagName,
      props,
    };
    this.props = Block._makePropsProxy(props);
    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _createResources() {
    const { tagName } = this._meta;
    this._element = Block._createDocumentElement(tagName);
  }

  static _createDocumentElement(tagName: string) {
    return document.createElement(tagName);
  }

  setProps = (nextProps: any) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  private _componentDidMount() {
    this.componentDidMount();
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidMount() {}

  private _componentDidUpdate() {
    const response = this.componentDidUpdate();
    if (response) {
      this._render();
    }
  }

  componentDidUpdate() {
    return true;
  }

  private _render() {
    const block = this.render();
    this._element.innerHTML = block;
  }

  render() {
    return '';
  }

  private static _makePropsProxy(props: any) {
    const self = this;

    function errorWhenPrivateProp(prop: string | number | symbol) {
      if (typeof prop === 'string' && prop.indexOf('_') === 0) {
        throw new Error('Нет прав');
      }
    }

    return new Proxy(props, {
      get(target, prop) {
        errorWhenPrivateProp(prop);
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
      },
      set(target, prop, value) {
        errorWhenPrivateProp(prop);
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU);
        return true;
      },
      deleteProperty() {
        throw new Error('Нет прав');
      },
    });
  }
}
