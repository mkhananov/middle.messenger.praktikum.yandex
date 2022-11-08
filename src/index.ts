import { openLoginPage } from "./pages/login";
import { openRegistrationPage } from "./pages/registration";
import { openBlankPage } from "./pages/blank";
import { openChatPage } from "./pages/chat";
import { openProfilePage } from "./pages/profile";

export const renderPage = (fragment: DocumentFragment): void => {
  const root = document.querySelector("#root");
  if (root) {
    root.innerHTML = "";
    root.appendChild(fragment);
  }
};

export const openPage = (page: string): void => {
  switch (page) {
    case "login":
      openLoginPage();
      break;
    case "registration":
      openRegistrationPage();
      break;
    case "chat":
      openChatPage();
      break;
    case "profile":
      openProfilePage({ readOnly: true });
      break;
    case "passwordChange":
      openProfilePage({ passwordChange: true });
      break;
    case "changeProfile":
      openProfilePage();
      break;
    case "serverError":
      openBlankPage("500", "Ошибка сервера");
      break;
    default:
      openBlankPage("404", "Страница не найдена");
  }
};

openLoginPage();
