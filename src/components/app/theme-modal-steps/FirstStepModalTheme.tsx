import { ToggleSwitch } from "flowbite-react";
import ColorPicker from "@/components/app/forms/custom/ColorPicker";
import LabelTooltip from "@/components/app/forms/custom/LabelTooltip";
import { defaultLabel } from "@/styles/StyledElements";

export default function FirstStepModalTheme({
  colors,
  errors,
  trigger,
  control,
  setValue,
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
          messsageLabel={
            <LabelTooltip
              messsageLabel="Cor primária *"
              messageTooltip="Cor em Hex (ex.: #000000) que recomendamos ser mais escura do que a cor secundária."
            />
          }
          className="uppercase"
          colorHex={primaryColor}
          setColorHex={setPrimaryColor}
          colors={colors}
          errors={errors}
          trigger={trigger}
          control={control}
          setValue={setValue}
        />
      </div>
      <div className="col-span-4">
        <ColorPicker
          inputName="secondary_color"
          messsageLabel="Cor secundária *"
          className="uppercase"
          colorHex={secondaryColor}
          setColorHex={setSecondaryColor}
          colors={colors}
          errors={errors}
          trigger={trigger}
          control={control}
          setValue={setValue}
        />
      </div>
      <div className="col-span-4 mt-2">
        <label
          htmlFor="header_primary"
          className={defaultLabel + " flex items-center cursor-pointer !mb-0"}
        >
          <ToggleSwitch
            id="header_primary"
            checked={headerPrimary}
            label=""
            onChange={() => {
              setHeaderPrimary(!headerPrimary);
              setValue("header_primary", !headerPrimary);
            }}
          />
          <LabelTooltip
            messsageLabel="Cor primária no header"
            messageTooltip="Caso essa opção esteja desativada, a cor que predominará no header será o branco (#FFFFFF)."
          />
        </label>
      </div>
    </>
  );
}
