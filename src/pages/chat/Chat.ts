import { Block } from "../../services/Block";
import tpl from "./index.tpl";
import Input from "../../components/input";

export default class Chat extends Block {
  constructor(props: Record<string, string | Input | object>) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
