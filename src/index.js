import template from "lodash/template";
import data from "./data";

const page = new URL(document.location).searchParams.get("page");
const { values, tpl } = !page ? data["login"] : data[page] ?? data["404"];
document.querySelector("#root").innerHTML = values ? template(tpl)(values) : "";
