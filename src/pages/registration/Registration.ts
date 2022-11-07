import { Block } from "../../services/Block";
import tpl from "./index.tpl";

export default class Registration extends Block {
  constructor(props: Record<string, any>) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
