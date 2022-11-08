import Registration from "./Registration";
import { renderPage } from "../../index";
import Input from "../../components/input";
import Button from "../../components/button";
import { submitForm } from "../../utils/checks";
import { openChatPage } from "../chat";
import { openLoginPage } from "../login";

export const openRegistrationPage = () => {
  const fields = [
    { label: "Почта", name: "email" },
    { label: "Логин", name: "login" },
    { label: "Имя", name: "first_name" },
    { label: "Фамилия", name: "second_name" },
    { label: "Телефон", name: "phone", type: "text" },
    { label: "Пароль", name: "password", type: "password" },
    { label: "Пароль (ещё раз)", type: "password", name: "new-password" }
  ].map(data => new Input({ ...data, required: true }));

  renderPage(
    new Registration({
      header: "Регистрация",
      fields,
      footer: [
        new Button({
          label: "Зарегистрироваться",
          onClick: () => submitForm(fields, openChatPage)
        }),
        new Button({ label: "Войти", link: true, onClick: openLoginPage })
      ]
    }).render()
  );
};
