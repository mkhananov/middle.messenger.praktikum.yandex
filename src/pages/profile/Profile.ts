import { Block } from "../../services/Block";
import tpl from "./index.tpl";
import Button from "../../components/button";

export default class Profile extends Block {
  constructor(props: Record<string, Button[] | object>) {
    super("div", props);
    this.props = props;
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
