import { Block } from "../../services/Block";
import tpl from "./index.tpl";

export default class ChatRoom extends Block {
  constructor(props: Record<string, string | boolean | Function>) {
    super("div", props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
