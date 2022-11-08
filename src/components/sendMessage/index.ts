import { Block } from "../../services/Block";
import tpl from "./index.tpl";

export default class SendMessage extends Block {
  constructor(props: Record<string, any>) {
    super("div", {
      ...props,
      events: {
        click: e => {
          e.preventDefault();
          e.stopPropagation();
          const element = document.querySelector(`[name="message"]`);
          if (element) {
            const value: string = element["value"];
            if (!value) {
              alert("Сообщение не может быть пустым");
              return;
            }
            console.log(value);
          }
        }
      }
    });
  }

  render() {
    return this.compile(tpl, this.props);
  }
}
