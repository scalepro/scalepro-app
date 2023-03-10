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

  return (
    <>
      <label htmlFor={inputName} className={defaultLabel}>
        {messsageLabel}
      </label>
      <div className="flex relative">
        <button
          onClick={() => setColorPicked(!colorPicked)}
          className="relative flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
              value={colorHex}
              onChange={(e) => {
                setColorHex(e.target.value);
                setValue(inputName, value);
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
            }}
            colors={colors}
          />
        </div>
      </div>
    </>
  );
}
