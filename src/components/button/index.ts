import { Block } from "../../services/Block";
import tpl from "./index.tpl";

export default class Button extends Block {
  constructor(props: Record<string, string | boolean | Function | unknown>) {
    const { onClick } = props;
    super("div", {
      ...props,
      events: {
        click: e => {
          if (typeof onClick === "function") {
            e.preventDefault();
            e.stopPropagation();
            onClick();
          }
        }
      }
    });
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
