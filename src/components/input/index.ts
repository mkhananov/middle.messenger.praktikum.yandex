import { Block } from "../../services/Block";
import tpl from "./index.tpl";
import { checks } from "../../utils/checks";

export default class Input extends Block {
  constructor(props: Record<string, any>) {
    super("div", {
      ...props,
      events: {
        blur: event => {
          const { required = false, name } = props;
          if (required) {
            const value: string = event.target.value.trim();
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
