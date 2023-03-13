import { classNames } from "@/services/functions";
import { Controller } from "react-hook-form";
import MaskedInput from "react-text-mask";
import {
  defaultInput,
  errorInput,
  defaultLabel,
  errorFormMessage,
} from "@/styles/StyledElements";

export default function InputCPF({
  errors,
  control,
  messsageLabel,
  inputName,
  placeholder,
  required,
}) {
  const validateCpf = (cpf) => {
    cpf = cpf.replace(/\D/g, "");
    if (cpf.toString().length != 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    var result = true;
    [9, 10].forEach(function (j) {
      var soma = 0,
        r;
      cpf
        .split(/(?=)/)
        .splice(0, j)
        .forEach(function (e, i) {
          soma += parseInt(e) * (j + 2 - (i + 1));
        });
      r = soma % 11;
      r = r < 2 ? 0 : 11 - r;
      if (r != cpf.substring(j, j + 1)) result = false;
    });
    return result;
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
          validate: (value) => validateCpf(value) || "Digite um CPF válido",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <MaskedInput
            mask={[
              /\d/,
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
