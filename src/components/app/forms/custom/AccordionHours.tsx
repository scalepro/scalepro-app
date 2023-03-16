import { useState } from "react";
import { defaultLabel } from "@/styles/StyledElements";

export default function AccordionHours({ inputName, messsageLabel }) {
  const [actualStep, setActualStep] = useState(0);
  return (
    <>
      <label className={defaultLabel}>{messsageLabel}</label>
      <ul id="accordion-collapse">
        <li className="relative">
          <input
            type="radio"
            id="hour-1"
            name={inputName}
            value="hosting-small"
            className="peer absolute z-20 w-4 h-4 ml-4 mt-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
            required
          />
          <label
            for="hour-1"
            className="relative inline-flex items-center justify-between w-full p-3 text-sm text-gray-500 bg-white border border-gray-200 rounded-t-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-600 dark:border-b-gray-700 peer-checked:border-b peer-checked:ring-blue-500 peer-checked:ring-1 peer-checked:z-10 dark:peer-checked:text-blue-400 peer-checked:border-blue-500 peer-checked:text-blue-500 dark:peer-checked:hover:bg-blue-500 dark:peer-checked:hover:text-gray-100 dark:peer-checked:hover:border-b-blue-500 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600 dark:hover:border-b-gray-600"
          >
            <div className="block">
              <div className="w-full ml-7">
                Segunda à Sexta, das X às Y horas.
              </div>
            </div>
          </label>
          <div className="hidden">
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
            id="hour-2"
            name={inputName}
            value="hosting-big"
            className="peer absolute z-20 w-4 h-4 ml-4 mt-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-0 dark:bg-gray-600 dark:border-gray-500"
            required
          />
          <label
            for="hour-2"
            className="relative inline-flex items-center justify-between w-full p-3 text-sm text-gray-500 bg-white border border-gray-200 rounded-b-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-600 peer-checked:ring-blue-500 peer-checked:ring-1 peer-checked:z-10 dark:peer-checked:text-blue-400 peer-checked:border-blue-500 peer-checked:text-blue-500 dark:peer-checked:hover:bg-blue-500 dark:peer-checked:hover:text-gray-100 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-600"
          >
            <div className="block">
              <div className="w-full ml-7">
                Seg à Sex, das X às Yh e Sáb das W às Zh.
              </div>
            </div>
          </label>
          <div className="hidden">
            <div className="p-5 font-light border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
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
      </ul>
    </>
  );
}
