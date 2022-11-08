import { Block } from "../../services/Block";
import tpl from "./index.tpl";
import Button from "../../components/button";
import Input from "../../components/input";

export default class Registration extends Block {
  constructor(props: Record<string, string | Button[] | Input[] | Function>) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
