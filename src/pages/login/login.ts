import { Block } from "../../services/Block";
import tpl from "./login.tpl";
import Input from "../../components/input";
import Button from "../../components/button";

export default class Login extends Block {
  constructor(props: Record<string, string | Input[] | Button[]>) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
