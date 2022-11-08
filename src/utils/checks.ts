import Input from "../components/input";

const checkUpperCaseFirstLetter = (value: string): string =>
  /^[A-ZА-Я]$/.test(value.charAt(0)) ? "" : "Первая буква должна заглавной";

const checkOnlyLettersOrHyphen = (value: string): string =>
  /^[A-zА-я-]+$/.test(value) ? "" : "Допустимы только буквы и дефис";

const checkLength = (value: string, min: number, max: number): string => {
  return new RegExp(`^.{${min},${max}}$`).test(value)
    ? ""
    : `Допустимое количество символов от ${min} до ${max}`;
};

const checkPhone = (value: string): string =>
  /^[+]?\d{10,15}$/.test(value) ? "" : "Недопустимый номер телефона";

const checkAllowedLoginChars = (value: string): string =>
  /^[A-z0-9_-]{3,20}$/.test(value) ? "" : "Недопустимые символы";

const checkOnlyDigits = (value: string): string =>
  /^\d+$/.test(value) ? "Только одни цифры недопустимы" : "";

const checkPasswordChars = (value: string): string =>
  /(?=.*[A-ZА-Я])(?=.*[0-9])/.test(value)
    ? ""
    : "Необходимы хотя бы одна заглавная буква и цифра";

const checkEmail = (value: string): string =>
  /^[a-zA-Z0-9!$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?$/.test(
    value
  )
    ? ""
    : "Недопустимый e-mail";

export const checks = (key: string): Function => {
  switch (key) {
    case "first_name":
    case "second_name":
      return value =>
        [checkUpperCaseFirstLetter, checkOnlyLettersOrHyphen].reduce(
          (acc, checkFn) => acc || checkFn(value),
          ""
        );
    case "login":
      return value =>
        [checkAllowedLoginChars, checkOnlyDigits].reduce(
          (acc, checkFn) => acc || checkFn(value),
          checkLength(value, 3, 20)
        );
    case "password":
    case "new-password":
    case "password-repeat":
      return value =>
        [checkPasswordChars].reduce(
          (acc, checkFn) => acc || checkFn(value),
          checkLength(value, 8, 40)
        );
    case "phone":
      return checkPhone;
    case "email":
      return checkEmail;
    default:
      return () => "";
  }
};

export const submitForm = (
  fields: Input[] = [],
  action: Function = () => {}
): void => {
  const form = document.querySelector("form");
  if (!form) {
    alert("На странице не найдена ни одна форма");
    return;
  }

  const formValues = {};
  const errors: string[] = [];

  for (const field of fields) {
    if (field.props.required) {
      const name: string = field.props.name;
      const element = form.querySelector(`[name=${name}]`);
      if (element) {
        const value = element["value"];
        if (typeof value === "string") {
          const error: string = checks(name)(value);
          if (error) {
            field.setProps({ error, value });
            errors.push(error);
          }
          Object.assign(formValues, { [name]: value });
        }
      }
    }
  }
  console.log(formValues);

  if (errors.length === 0) {
    action();
  }
};
