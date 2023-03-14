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
  return (
    <>
      <label htmlFor={inputName} className={defaultLabel}>
        {messsageLabel}
      </label>
      <Controller
        control={control}
        name={inputName}
        rules={{
          required: { required },
          minLength: 15,
          maxLength: 16,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <MaskedInput
            mask={[
              "(",
              /\d/,
              /\d/,
              ")",
              " ",
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
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
                  errors[inputName].type === "required" ||
                  errors[inputName].type === "minLength" ||
                  errors[inputName].type === "maxLength")
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
        (((errors[inputName].type === "minLength" ||
          errors[inputName].type === "maxLength") && (
          <p className={errorFormMessage}>Número de telefone incorreto</p>
        )) ||
          (errors[inputName].type === "required" && (
            <p className={errorFormMessage}>Este campo é obrigatório</p>
          )))}
    </>
  );
}
