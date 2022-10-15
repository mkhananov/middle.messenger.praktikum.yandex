import template from "lodash/template";
import data from "./data";

const [, path = ""] = window.location.pathname.split("/");
const { values, page } = data[path] ?? data["404"];
document.querySelector("#root").innerHTML = page ? template(page)(values) : "";
