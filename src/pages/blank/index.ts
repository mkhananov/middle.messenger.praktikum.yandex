import { renderPage } from "../../index";
import Blank from "./Blank";

export const openBlankPage = (title, description, back = "Назад к чатам") =>
  renderPage(new Blank({ title, description, back }).render());
