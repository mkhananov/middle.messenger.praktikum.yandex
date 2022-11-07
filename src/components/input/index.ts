import { Block } from "../../services/Block";
import tpl from "./index.tpl";
import { checks } from "../../utils/checks";

export default class Input extends Block {
  constructor(props: Record<string, any>) {
    const { required = false, name } = props;
    super("div", {
      ...props,
      events: {
        blur: e => {
          if (required) {
            const value: string = e.target.value.trim();
            const error: string = checks(name)(value);
            this.setProps({ error, value });
          }
        }
      }
    });
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
