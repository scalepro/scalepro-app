import { classNames } from "@/services/functions";
import {
  defaultInput,
  errorInput,
  defaultLabel,
  errorFormMessage,
} from "@/styles/StyledElements";

export interface InputTextProps {
  errors: 
  register,
  messsageLabel,
  inputName,
  placeholder,
  required,
  className,
}

export default function InputText({
  errors,
  register,
  messsageLabel,
  inputName,
  placeholder,
  required,
  className,
}) {
  return (
    <>
      <label htmlFor={inputName} className={defaultLabel}>
        {messsageLabel}
      </label>
      <input
        type="text"
        id={inputName}
        className={classNames(
          errors[inputName] && !errors[inputName].message
            ? errorInput
            : defaultInput,
          className
        )}
        placeholder={placeholder}
        {...register(inputName, { required: required })}
      />
      {errors[inputName] && errors[inputName].type === "required" && (
        <p className={errorFormMessage}>Este campo é obrigatório</p>
      )}
    </>
  );
}
