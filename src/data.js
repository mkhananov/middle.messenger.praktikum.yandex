import login from "./pages/login/login";
import error from "./pages/error/error";
import chat from "./pages/chat/chat";
import profile from "./pages/profile/profile";

import attach from "./../static/icons/attach.svg";
import send from "./../static/icons/send.svg";
import arrow from "../static/icons/arrow.svg";
import photo from "../static/icons/photo.svg";

const page_login = "login";
const page_chat = "chat";
const page_profile = "profile";
const page_register = "register";
const page_password = "password";
const page_404 = "404";
const page_505 = "505";

const link = page => `?page=${page}`;

export default {
  [page_chat]: {
    tpl: chat,
    values: {
      profile: {
        label: "Профиль",
        link: link(page_profile)
      },
      icons: { attach, send, arrow }
    }
  },
  [page_login]: {
    tpl: login,
    values: {
      header: "Вход",
      fields: [
        { label: "Логин", name: "login", type: "text" },
        { label: "Пароль", name: "password", type: "password" }
      ],
      footer: [
        { label: "Войти", type: "button" },
        { label: "Регистрация", type: "link", link: link(page_register) },
        { type: "page", link: page_chat }
      ]
    }
  },
  [page_register]: {
    tpl: login,
    values: {
      header: "Регистрация",
      fields: [
        { label: "Почта", name: "email", type: "text" },
        { label: "Логин", name: "login", type: "text" },
        { label: "Имя", name: "first_name", type: "text" },
        { label: "Фамилия", name: "second_name", type: "text" },
        { label: "Телефон", name: "phone", type: "text" },
        { label: "Пароль", name: "password", type: "password" },
        { label: "Пароль (ещё раз)", type: "password" }
      ],
      footer: [
        {
          label: "Зарегистрироваться",
          type: "button"
        },
        { label: "Войти", type: "link", link: link(page_login) },
        { type: "page", link: page_chat }
      ]
    }
  },
  [page_profile]: {
    tpl: profile,
    values: {
      icons: { arrow },
      back: {
        label: "Назад",
        link: link(page_chat)
      },
      editable: true,
      avatar: {
        name: "avatar",
        photo
      },
      fields: [
        {
          label: "Почта",
          name: "email",
          type: "text",
          value: "user@yandex.ru"
        },
        {
          label: "Логин",
          name: "login",
          type: "text",
          value: "user"
        },
        {
          label: "Имя",
          name: "first_name",
          type: "text",
          value: "Иван"
        },
        {
          label: "Фамилия",
          name: "second_name",
          type: "text",
          value: "Иванов"
        },
        {
          label: "Имя в чате",
          name: "display_name",
          type: "text",
          value: "user"
        },
        { type: "page", value: page_profile },
        {
          label: "Телефон",
          name: "phone",
          type: "text",
          value: "+7 (962) 000 00 00"
        }
      ],
      footer: [
        {
          label: "Изменить данные",
          type: "link",
          link: link(page_profile) + "&edit"
        },
        {
          label: "Изменить пароль",
          type: "link",
          link: `/${link(page_password)}&edit`
        },
        {
          label: "Выйти",
          type: "link",
          link: link(page_login),
          className: "danger"
        },
        {
          label: "Сохранить",
          type: "button",
          isEditMode: true
        }
      ]
    }
  },
  [page_password]: {
    tpl: profile,
    values: {
      icons: { arrow },
      back: {
        label: "Назад",
        link: link(page_chat)
      },
      avatar: {
        name: "avatar",
        photo
      },
      editable: true,
      fields: [
        {
          label: "Старый пароль",
          name: "oldPassword",
          type: "password",
          value: "Старый пароль"
        },
        { type: "page", value: page_profile },
        {
          label: "Новый пароль",
          name: "newPassword",
          type: "password",
          value: "Новый пароль"
        },
        {
          label: "Повторите новый пароль",
          type: "password",
          value: "Новый пароль"
        }
      ],
      footer: [
        {
          label: "Сохранить",
          type: "button",
          isEditMode: true
        },
        {
          type: "page",
          link: page_profile
        }
      ]
    }
  },
  [page_404]: {
    tpl: error,
    values: { code: 404, message: "Страница не найдена" }
  },
  [page_505]: {
    tpl: error,
    values: { code: 505, message: "Ошибка сервера" }
  }
};
