import { Block } from "../../services/Block";
import tpl from "./index.tpl";

export default class Blank extends Block {
  constructor(props: Record<string, string>) {
    super("div", props);
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
