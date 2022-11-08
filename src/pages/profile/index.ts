import Profile from "./Profile";
import { openPage, renderPage } from "../../index";
import Input from "../../components/input";
import Button from "../../components/button";
// @ts-ignore
import arrow from "../../../static/icons/arrow.svg";
// @ts-ignore
import photo from "../../../static/icons/photo.svg";
import { submitForm } from "../../utils/checks";

export const openProfilePage = ({
  readOnly = false,
  passwordChange = false
} = {}) => {
  const fields = (passwordChange
    ? [
        {
          label: "Старый пароль",
          name: "password",
          type: "password",
          value: "12345678"
        },
        {
          label: "Новый пароль",
          name: "new-password",
          type: "password",
          value: "1234"
        },
        {
          label: "Повторите новый пароль",
          name: "password-repeat",
          type: "password",
          value: "1234"
        }
      ]
    : [
        { label: "Почта", name: "email", value: "user@yandex.ru" },
        { label: "Логин", name: "login", value: "user" },
        { label: "Имя", name: "first_name", value: "Иван" },
        { label: "Фамилия", name: "second_name", value: "Иванов" },
        { label: "Имя в чате", name: "display_name", value: "user" },
        { label: "Телефон", name: "phone", value: "+79620000000" }
      ]
  ).map(
    props => new Input({ ...props, required: true, className: "row", readOnly })
  );

  const footer = (passwordChange
    ? [
        {
          label: "Сохранить",
          visible: true,
          onClick: () =>
            submitForm(fields, () => openProfilePage({ readOnly: true }))
        }
      ]
    : [
        {
          label: "Изменить данные",
          link: true,
          onClick: () => openPage("changeProfile"),
          visible: readOnly
        },
        {
          label: "Изменить пароль",
          link: true,
          onClick: () => openPage("passwordChange"),
          visible: readOnly
        },
        {
          label: "Выйти",
          link: true,
          onClick: () => openPage("login"),
          className: "danger",
          visible: readOnly
        },
        {
          label: "Сохранить",
          visible: !readOnly,
          onClick: () =>
            submitForm(fields, () => openProfilePage({ readOnly: true }))
        }
      ]
  )
    .filter(({ visible }) => visible)
    .map(props => new Button({ ...props, row: true, required: true }));

  renderPage(
    new Profile({
      back: new Button({
        label: "Назад",
        icon: arrow,
        className: "profile-page__back",
        onClick: () => openPage("chat")
      }),
      avatar: { name: "avatar", photo },
      fields,
      footer
    }).render()
  );
};
