import Chat from "./Chat";
import { renderPage } from "../../index";
// @ts-ignore
import arrow from "../../../static/icons/arrow.svg";
// @ts-ignore
import search from "../../../static/icons/search.svg";
// @ts-ignore
import attach from "../../../static/icons/attach.svg";
// @ts-ignore
import send from "../../../static/icons/send.svg";
import { openProfilePage } from "../profile";
import Button from "../../components/button";
import Message from "../../components/message";
import ChatRoom from "../../components/chatRoom";
import SendMessage from "../../components/sendMessage";

export const openChatPage = () =>
  renderPage(
    new Chat({
      profile: new Button({
        label: "Профиль",
        icon: arrow,
        onClick: () => openProfilePage({ readOnly: true })
      }),
      chatRooms: [
        {
          name: "Имя",
          message: "Привет! Смотри, тут всплыл...",
          time: "16:20",
          unread: "1"
        }
      ].map(props => new ChatRoom(props)),
      messages: [
        {
          message:
            "Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n" +
            "\n" +
            "Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.",
          time: "16:20"
        }
      ].map(props => new Message(props)),
      icons: { search, attach },
      sendMessage: new SendMessage({ icon: send })
    }).render()
  );
