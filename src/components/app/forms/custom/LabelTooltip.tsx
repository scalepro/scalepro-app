import { Tooltip } from "flowbite-react";
import { HiQuestionMarkCircle } from "react-icons/hi";

const themeTooltip = {
  style: {
    dark: "bg-gray-600",
  },
  arrow: {
    style: {
      dark: "bg-gray-600",
    },
  },
};

export default function LabelTooltip({ messsageLabel, messageTooltip }) {
  return (
    <div className="flex items-center">
      {messsageLabel}
      <Tooltip
        content={messageTooltip}
        placement="top"
        className="max-w-sm"
        theme={themeTooltip}
      >
        <HiQuestionMarkCircle className="ml-2 h-[18px] w-[18px] text-gray-500 hover:text-gray-300" />
      </Tooltip>
    </div>
  );
}
