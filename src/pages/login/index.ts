import Login from "./Login";
import { openPage, renderPage } from "../../index";
import Input from "../../components/input";
import Button from "../../components/button";

export const openLoginPage = () =>
  renderPage(
    new Login({
      header: "Вход",
      fields: [
        new Input({ label: "Логин", name: "login" }),
        new Input({ label: "Пароль", name: "password", type: "password" })
      ],
      footer: [
        new Button({
          label: "Войти",
          onClick: () => openPage("chat")
        }),
        new Button({
          label: "Регистрация",
          link: true,
          onClick: () => openPage("registration")
        })
      ]
    }).render()
  );
