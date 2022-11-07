import { Block } from "../../services/Block";
import tpl from "./index.tpl";

export default class Message extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
