import login from "./pages/login/login";
import error from "./pages/error/error";
import chat from "./pages/chat/chat";
import profile from "./pages/profile/profile";

import attach from "./../static/icons/attach.svg";
import send from "./../static/icons/send.svg";
import arrow from "../static/icons/arrow.svg";
import photo from "../static/icons/photo.svg";

const url_login = "";
const url_chat = "chat";
const url_profile = "profile";
const url_register = "register";
const url_profileEdit = "profile?edit";
const url_password = "password";
const url_404 = "404";
const url_505 = "505";

export default {
  [url_chat]: {
    page: chat,
    values: {
      profile: {
        label: "Профиль",
        link: url_profile
      },
      icons: { attach, send, arrow }
    }
  },
  [url_login]: {
    page: login,
    values: {
      action: url_chat,
      header: "Вход",
      fields: [
        { label: "Логин", name: "login", type: "text" },
        { label: "Пароль", name: "password", type: "password" }
      ],
      footer: [
        { label: "Войти", type: "button" },
        { label: "Регистрация", type: "link", link: url_register }
      ]
    }
  },
  [url_register]: {
    page: login,
    values: {
      header: "Регистрация",
      action: url_chat,
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
        { label: "Войти", type: "link", link: url_login }
      ]
    }
  },
  [url_profile]: {
    page: profile,
    values: {
      action: url_profile,
      icons: { arrow },
      back: {
        label: "Назад",
        link: url_chat
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
          link: url_profileEdit
        },
        {
          label: "Изменить пароль",
          type: "link",
          link: `/${url_password}?edit`
        },
        {
          label: "Выйти",
          type: "link",
          link: `/${url_login}`,
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
  [url_password]: {
    page: profile,
    values: {
      action: url_profile,
      icons: { arrow },
      back: {
        label: "Назад",
        link: url_chat
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
        }
      ]
    }
  },
  [url_404]: {
    page: error,
    values: { code: 404, message: "Страница не найдена" }
  },
  [url_505]: {
    page: error,
    values: { code: 505, message: "Ошибка сервера" }
  }
};
