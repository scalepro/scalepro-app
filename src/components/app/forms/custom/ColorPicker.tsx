import { useState, useEffect, useRef, useCallback } from "react";
import { BlockPicker } from "react-color";
import { HiChevronDown } from "react-icons/hi";
import MaskedInput from "react-text-mask";
import { Controller } from "react-hook-form";
import { classNames } from "@/services/functions";
import {
  errorInputDefineColor,
  defaultLabel,
  errorFormMessage,
} from "@/styles/StyledElements";

export default function ColorPicker({
  errors,
  control,
  trigger,
  setValue,
  inputName,
  messsageLabel,
  colorHex,
  setColorHex,
  colors,
  className,
}) {
  const [colorPicked, setColorPicked] = useState(false);
  const buttonColorPickerRef = useRef(null);
  const colorPickerRef = useRef(null);

  const handleClickOutside = useCallback((event) => {
    if (
      !colorPickerRef?.current?.contains(event.target as Node) &&
      !buttonColorPickerRef?.current?.contains(event.target as Node)
    ) {
      setColorPicked(false);
    }
  }, []);

  useEffect(() => {
    if (colorPicked) window.addEventListener("mousedown", handleClickOutside);
    else window.removeEventListener("mousedown", handleClickOutside);
  }, [colorPicked]);

  const isColor = (strColor) => {
    return /^#(([0-9A-Fa-f]{2}){3,4}|[0-9A-Fa-f]{3,4})$/.test(strColor);
  };

  return (
    <>
      <label htmlFor={inputName} className={defaultLabel}>
        {messsageLabel}
      </label>
      <div className="flex relative">
        <button
          onClick={() => setColorPicked(!colorPicked)}
          className={classNames(
            errors[inputName] &&
              (errors[inputName].message ||
                errors[inputName].type === "required" ||
                errors[inputName].type === "minLength" ||
                errors[inputName].type === "maxLength")
              ? "relative flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center bg-red-50 border border-red-500 text-red-900 placeholder-red-700 rounded-l-lg focus:ring-1 focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 block p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500"
              : "relative flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500",
            className
          )}
          type="button"
          ref={buttonColorPickerRef}
        >
          <span
            className="w-5 h-4 mr-1 rounded-sm"
            style={{ backgroundColor: colorHex }}
          ></span>
          <HiChevronDown className="w-4 h-4 ml-1" />
        </button>
        <Controller
          control={control}
          name={inputName}
          rules={{
            required: true,
            minLength: 7,
            maxLength: 7,
            validate: (value) => isColor(value) || "Digite uma cor válida",
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <MaskedInput
              mask={[
                "#",
                /[a-z\d]/i,
                /[a-z\d]/i,
                /[a-z\d]/i,
                /[a-z\d]/i,
                /[a-z\d]/i,
                /[a-z\d]/i,
              ]}
              guide={false}
              value={value}
              onBlur={onBlur}
              onChange={(e) => {
                onChange(e);
                setColorHex(e.target.value);
                if (errors[inputName]) trigger(inputName);
              }}
              className={classNames(
                errors[inputName] &&
                  (errors[inputName].message ||
                    errors[inputName].type === "required" ||
                    errors[inputName].type === "minLength" ||
                    errors[inputName].type === "maxLength")
                  ? errorInputDefineColor
                  : "bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-r-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
                "focus-visible:outline-none focus:ring-1 focus:z-10",
                className
              )}
              placeholder="#AABBCC"
            />
          )}
        />
        <div
          style={{ visibility: colorPicked ? "visible" : "hidden" }}
          className="mt-4 absolute top-full z-10"
          ref={colorPickerRef}
        >
          <BlockPicker
            id={inputName}
            instanceId={inputName}
            color={colorHex}
            onChangeComplete={(color) => {
              setColorHex(color.hex);
              setValue(inputName, color.hex);
              if (errors[inputName]) trigger(inputName);
            }}
            colors={colors}
          />
        </div>
      </div>
      {errors[inputName] &&
        (((errors[inputName].type === "minLength" ||
          errors[inputName].type === "maxLength") && (
          <p className={errorFormMessage}>Digite um código de 6 dígitos</p>
        )) ||
          (errors[inputName].type === "required" && (
            <p className={errorFormMessage}>Este campo é obrigatório</p>
          )) ||
          (errors[inputName].message && (
            <p className={errorFormMessage}>{errors[inputName].message}</p>
          )))}
    </>
  );
}
