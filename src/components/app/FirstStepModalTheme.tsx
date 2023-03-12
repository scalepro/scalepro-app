import { classNames } from "@/services/functions";
import { ToggleSwitch } from "flowbite-react";
import ColorPicker from "@/components/app/forms/custom/ColorPicker";

export default function FirstStepModalTheme({
  colors,
  errors,
  control,
  setValue,
  register,
  primaryColor,
  setPrimaryColor,
  secondaryColor,
  setSecondaryColor,
  headerPrimary,
  setHeaderPrimary,
}) {
  return (
    <>
      <div className="col-span-4">
        <ColorPicker
          inputName="primary_color"
          messsageLabel="Cor primária"
          className="uppercase"
          colorHex={primaryColor}
          setColorHex={setPrimaryColor}
          colors={colors}
          errors={errors}
          control={control}
          setValue={setValue}
        />
      </div>
      <div className="col-span-4">
        <ColorPicker
          inputName="secondary_color"
          messsageLabel="Cor secundária"
          className="uppercase"
          colorHex={secondaryColor}
          setColorHex={setSecondaryColor}
          colors={colors}
          errors={errors}
          control={control}
          setValue={setValue}
        />
      </div>
      <div className="col-span-4 mt-2">
        <ToggleSwitch
          id="header_primary"
          checked={headerPrimary}
          label="Cor primária no header"
          onChange={() => {
            setHeaderPrimary(!headerPrimary);
            setValue("header_primary", !headerPrimary);
          }}
        />
      </div>
    </>
  );
}
