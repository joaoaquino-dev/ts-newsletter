import type { User } from "../types/User";
import type { FormErrors } from "../types/FormErrors";

export const validate = (data: User): FormErrors => {
  const errors: FormErrors = {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!data.name) {
    errors["name"] = "O nome é obrigatório";
  }

  if (!data.email) {
    errors["email"] = "O email é obrigatório";
  } else if (!emailRegex.test(data.email)) {
    errors["email"] = "Digite um e-mail válido";
  }

  if (!data.agree) {
    errors["agree"] = "Você precisa concordar com os termos";
  }

  return errors;
};
