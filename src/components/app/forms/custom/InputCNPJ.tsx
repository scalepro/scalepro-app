import { classNames } from "@/services/functions";
import { Controller } from "react-hook-form";
import MaskedInput from "react-text-mask";
import {
  defaultInput,
  errorInput,
  defaultLabel,
  errorFormMessage,
} from "@/styles/StyledElements";

export default function InputCNPJ({
  errors,
  control,
  messsageLabel,
  inputName,
  placeholder,
  required,
}) {
  const validateCNPJ = (cnpj) => {
    if (!cnpj) return false;
    if (cnpj == "") return false;

    cnpj = cnpj.replace(/[^\d]+/g, "");
    if (cnpj.length != 14) return false;
    if (
      cnpj == "00000000000000" ||
      cnpj == "11111111111111" ||
      cnpj == "22222222222222" ||
      cnpj == "33333333333333" ||
      cnpj == "44444444444444" ||
      cnpj == "55555555555555" ||
      cnpj == "66666666666666" ||
      cnpj == "77777777777777" ||
      cnpj == "88888888888888" ||
      cnpj == "99999999999999"
    )
      return false;

    let cnpjLength = cnpj.length - 2;
    let numbers = cnpj.substring(0, cnpjLength);
    let digit = cnpj.substring(cnpjLength);
    let numbersSum = 0;
    let pos = cnpjLength - 7;
    for (let i = cnpjLength; i >= 1; i--) {
      numbersSum += numbers.charAt(cnpjLength - i) * pos--;
      if (pos < 2) pos = 9;
    }
    let result = numbersSum % 11 < 2 ? 0 : 11 - (numbersSum % 11);
    if (result != digit.charAt(0)) return false;

    cnpjLength = cnpjLength + 1;
    numbers = cnpj.substring(0, cnpjLength);
    numbersSum = 0;
    pos = cnpjLength - 7;
    for (let i = cnpjLength; i >= 1; i--) {
      numbersSum += numbers.charAt(cnpjLength - i) * pos--;
      if (pos < 2) pos = 9;
    }
    result = numbersSum % 11 < 2 ? 0 : 11 - (numbersSum % 11);
    if (result != digit.charAt(1)) return false;

    return true;
  };

  return (
    <>
      <label htmlFor={inputName} className={defaultLabel}>
        {messsageLabel}
      </label>
      <Controller
        control={control}
        name={inputName}
        rules={{
          required: required,
          validate: (value) => {
            if (value) return validateCNPJ(value) || "Digite um CNPJ válido";
          },
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <MaskedInput
            mask={[
              /\d/,
              /\d/,
              ".",
              /\d/,
              /\d/,
              /\d/,
              ".",
              /\d/,
              /\d/,
              /\d/,
              "/",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
            ]}
            guide={false}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            className={classNames(
              errors[inputName] &&
                (errors[inputName].message ||
                  errors[inputName].type === "required")
                ? errorInput
                : defaultInput,
              "focus-visible:ring-primary-500 focus-visible:border-primary-500",
              "focus-visible:outline-none focus:ring-1 focus:z-10"
            )}
            placeholder={placeholder}
          />
        )}
      />
      {errors[inputName] &&
        ((errors[inputName].type === "required" && (
          <p className={errorFormMessage}>Este campo é obrigatório</p>
        )) ||
          (errors[inputName].message && (
            <span className={errorFormMessage}>
              <>{errors[inputName].message}</>
            </span>
          )))}
    </>
  );
}
