import { defaultLabel, defaultInput } from "@/styles/StyledElements";
export default function Select({
  inputName,
  messsageLabel,
  defaultOption,
  arrayElements,
  onChangeHandle,
}) {
  return (
    <>
      <label htmlFor={inputName} className={defaultLabel}>
        {messsageLabel}
      </label>
      <select
        id={inputName}
        className={defaultInput}
        onChange={(e) => onChangeHandle(e.target.value)}
      >
        <option value="" className="hidden">
          {defaultOption}
        </option>
        {arrayElements.map((element, elementIdx) => (
          <option value={element} key={elementIdx}>
            {element}
          </option>
        ))}
      </select>
    </>
  );
}
