import * as Handlebars from "handlebars";
import { v4 as makeUUID } from "uuid";
import { EventBus, IEventBus } from "./EventBus";

type Props = { [key: string]: any };
type Children = { [key: string]: Block };
type List = { [key: string]: Block[] };
type Events = { [key: string]: (event: Event) => void };

interface IChildren {
  children: Children;
  props: Props;
  list: List;
}

export class Block {
  children: Children;
  events: Events;
  list: List;
  props: Props;
  tagName: string;
  eventBus: () => IEventBus;
  _element: HTMLElement | null = null;
  _id: string;

  static EVENTS: { [key: string]: string } = {
    INIT: "init",
    FLOW_CDM: "flow:component-did-mount",
    FLOW_CDU: "flow:component-did-update",
    FLOW_RENDER: "flow:render"
  };

  constructor(tagName = "div", { events = {}, ...propsAndChildren } = {}) {
    const { children, props, list } = this._getChildren(propsAndChildren);

    this._id = makeUUID();

    this.children = children;
    this.events = events;
    this.list = list;
    const eventBus = new EventBus();
    this.tagName = tagName;

    this.props = props;

    this.eventBus = () => eventBus;
    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus: IEventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidMount() {
    this.componentDidMount();

    Object.values(this.children).forEach((child: Block) => {
      child.dispatchComponentDidMount();
    });
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidMount(oldProps?: unknown) {
    return oldProps;
  }

  dispatchComponentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidUpdate(oldProps: unknown, newProps: unknown) {
    const response: boolean = this.componentDidUpdate(oldProps, newProps);
    if (response) this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  componentDidUpdate(oldProps: any, newProps: any): boolean {
    return JSON.stringify(oldProps) !== JSON.stringify(newProps);
  }

  private _render() {
    const block = this.render(); // render теперь возвращает DocumentFragment

    if (this._element && block) {
      this._element.innerHTML = "";
      this._element.appendChild(block);
      this._addEvents();
    }
  }

  render(): DocumentFragment | void {}

  private _createResources() {
    this._element = this._createDocumentElement(this.tagName);
  }

  compile(template: string, props: { [key: string]: any }) {
    const propsAndStubs = { ...props };
    const fragment = this._createDocumentElement("template");

    Object.entries(this.children).forEach(([key, child]) => {
      propsAndStubs[key] = `<div data-id="${child._id}"></div>`;
    });

    Object.entries(this.list).forEach(([key, blocks]) => {
      propsAndStubs[key] = blocks
        .map(({ _id }) => `<div data-id="${_id}"></div>`)
        .join("");
    });

    fragment.innerHTML = Handlebars.compile(template)(propsAndStubs);

    [
      ...Object.values(this.children),
      ...Object.values(this.list).flat()
    ].forEach((child: Block) => {
      const stub = fragment["content"].querySelector(
        `[data-id="${child._id}"]`
      );
      if (stub) {
        const content = child.getContent();
        if (content) {
          stub.replaceWith(content);
        }
      }
    });

    return fragment["content"];
  }

  setProps = (nextProps: object): void => {
    this.props = { ...this.props, ...nextProps };
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  };

  get element() {
    return this._element;
  }

  getContent(): HTMLElement | null {
    return this.element;
  }

  _createDocumentElement(tagName: string): HTMLElement {
    return document.createElement(tagName);
  }

  private _getChildren(propsAndChildren: {
    [key: string]: { props: any };
  }): IChildren {
    const children: { [name: string]: Block } = {};
    const props: { [name: string]: any } = {};
    const list: { [name: string]: Block[] } = {};

    Object.entries(propsAndChildren).forEach(([key, value]) => {
      if (value instanceof Block) {
        children[key] = value;
      } else if (Array.isArray(value)) {
        list[key] = value;
      } else {
        props[key] = value;
      }
    });

    return { children, props, list };
  }

  _addEvents(): void {
    const eventElements: string[] = ["input", "button", "a"];
    Object.keys(this.events).forEach(eventName => {
      let eventElement: Element | undefined | null;
      eventElements.forEach(elem => {
        if (this._element) {
          const queryElement = this._element.querySelector(elem);
          if (queryElement) {
            eventElement = queryElement;
          }
        }
      });

      if (eventElement) {
        eventElement.addEventListener(eventName, this.events[eventName]);
      }
    });
  }
}
