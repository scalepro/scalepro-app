import { useState } from "react";
import { classNames } from "@/services/functions";
import { defaultLabel, defaultInput } from "@/styles/StyledElements";

export default function AccordionHours({ inputName, messsageLabel }) {
  const [hourFirstSelected, setHourFirstSelected] = useState(false);
  const [hourSecondSelected, setHourSecondSelected] = useState(false);
  const onChangeValue = (event) => {
    if (event.target.id == "hour_first") {
      setHourFirstSelected(true);
      setHourSecondSelected(false);
    } else if (event.target.id == "hour_second") {
      setHourSecondSelected(true);
      setHourFirstSelected(false);
    }
  };

  const [secondXNumber, setSecondXNumber] = useState("X");

  return (
    <>
      <label className={defaultLabel}>{messsageLabel}</label>
      <ul id="accordion-collapse" onChange={onChangeValue}>
        <li className="relative">
          <input
            type="radio"
            id="hour_first"
            name={inputName}
            value="hosting-small"
            className="peer absolute z-20 w-4 h-4 ml-4 mt-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
            required
          />
          <label
            for="hour_first"
            className="relative inline-flex items-center justify-between w-full p-3 text-sm text-gray-500 bg-white border border-gray-200 rounded-t-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-600 dark:border-b-gray-700 peer-checked:border-b peer-checked:ring-blue-500 peer-checked:ring-1 peer-checked:z-10 dark:peer-checked:text-blue-400 peer-checked:border-blue-500 peer-checked:text-blue-500 dark:peer-checked:hover:bg-blue-500 dark:peer-checked:hover:text-gray-100 dark:peer-checked:hover:border-b-blue-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:border-b-gray-600"
          >
            <div className="block">
              <div className="w-full ml-7">
                Segunda à Sexta, das X às Y horas.
              </div>
            </div>
          </label>
          <div className={hourFirstSelected ? "block" : "hidden"}>
            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-600 dark:bg-gray-700">
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Flowbite is an open-source library of interactive components
                built on top of Tailwind CSS including buttons, dropdowns,
                modals, navbars, and more.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Check out this guide to learn how to and start developing
                websites even faster with components on top of Tailwind CSS.
              </p>
            </div>
          </div>
        </li>
        <li className="relative">
          <input
            type="radio"
            id="hour_second"
            name={inputName}
            value="hosting-big"
            className="peer absolute z-20 w-4 h-4 ml-4 mt-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
            required
          />
          <label
            for="hour_second"
            className="relative inline-flex items-center justify-between w-full p-3 text-sm text-gray-500 bg-white border border-gray-200 rounded-b-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-600 peer-checked:ring-blue-500 peer-checked:ring-1 peer-checked:z-10 dark:peer-checked:text-blue-400 peer-checked:border-blue-500 peer-checked:text-blue-500 dark:peer-checked:hover:bg-blue-500 dark:peer-checked:hover:text-gray-100 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <div className="block">
              <div className="w-full ml-7">
                Seg à Sex, das {secondXNumber} às Yh e Sáb das W às Zh.
              </div>
            </div>
          </label>
          <div className={hourSecondSelected ? "block" : "hidden"}>
            <div className="-mt-1 p-4 font-light border border-t-0 rounded-b-lg border-gray-200 dark:border-gray-600 dark:bg-gray-700">
              <div className="grid grid-cols-4 gap-2">
                <div className="col-span-1">
                  <label htmlFor="second_x_number" className={defaultLabel}>
                    De (X)
                  </label>
                  <select
                    id="second_x_number"
                    className={defaultInput}
                    onChange={(e) => setSecondXNumber(e.target.value)}
                  >
                    {Array.from(Array(24).keys()).map((number, numberIdx) => (
                      <option value={number} key={numberIdx}>
                        {number}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-1">
                  <label htmlFor="second_y_number" className={defaultLabel}>
                    Até (Y)
                  </label>
                  <input
                    id="second_y_number"
                    type="number"
                    className={defaultInput}
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="second_w_number" className={defaultLabel}>
                    De (W)
                  </label>
                  <input
                    id="second_w_number"
                    type="number"
                    className={defaultInput}
                  />
                </div>
                <div className="col-span-1">
                  <label htmlFor="second_Z_number" className={defaultLabel}>
                    Até (Z)
                  </label>
                  <input
                    id="second_Z_number"
                    type="number"
                    className={defaultInput}
                  />
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
