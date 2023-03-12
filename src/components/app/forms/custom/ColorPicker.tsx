import { useState, useEffect, useRef } from "react";
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
  inputName,
  messsageLabel,
  colorHex,
  setColorHex,
  colors,
  errors,
  control,
  setValue,
  className,
}) {
  const [colorPicked, setColorPicked] = useState(false);
  const colorPickerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        colorPickerRef.current &&
        !colorPickerRef.current.contains(event.target as Node)
      ) {
        setColorPicked(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <label htmlFor={inputName} className={defaultLabel}>
        {messsageLabel}
      </label>
      <div className="flex">
        <button
          onClick={() => setColorPicked(true)}
          className="relative flex-shrink-0 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-l-lg hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white dark:border-gray-600 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500"
          type="button"
        >
          <div
            style={{ visibility: colorPicked ? "visible" : "hidden" }}
            className="-ml-4 mt-4 absolute top-full z-10"
            ref={colorPickerRef}
          >
            <BlockPicker
              color={colorHex}
              onChangeComplete={(color) => {
                setColorHex(color.hex);
                setValue(inputName, color.hex);
              }}
              colors={colors}
            />
          </div>
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
                  : "bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-r-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500",
                "focus-visible:outline-none focus:ring-1 focus:z-10",
                className
              )}
              placeholder="#AABBCC"
            />
          )}
        />
      </div>
    </>
  );
}
