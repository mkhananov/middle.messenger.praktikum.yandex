import { Block } from "../../services/Block";
import tpl from "./login.tpl";

export default class Login extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
