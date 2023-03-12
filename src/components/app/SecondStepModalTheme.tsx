import { useState } from "react";
import { classNames } from "@/services/functions";
import { HiChevronDown, HiSearch, HiX } from "react-icons/hi";
import InputText from "@/components/app/forms/flowbite/InputText";
import {
  defaultInput,
  errorInput,
  defaultLabel,
  errorFormMessage,
} from "@/styles/StyledElements";

export default function SecondStepModalTheme({
  errors,
  register,
  categories,
  setCategories,
  dropdownCategories,
  setDropdownCategories,
  dropdownCategoriesRef,
  searchCategories,
  setSearchCategories,
  listCategories,
}) {
  const [searchCategoriesValue, setSearchCategoriesValue] = useState("");

  return (
    <>
      <div className="col-span-4">
        <InputText
          errors={errors}
          register={register}
          messsageLabel="Mensagem do header"
          inputName="header_message"
          placeholder="EX.: SÓ HOJE! FRETE GRÁTIS PARA TODO O BRASIL"
          required={true}
          className="uppercase"
        />
      </div>
      <div className="col-span-4">
        <span className={defaultLabel}>Categorias</span>

        <button
          onClick={() => setDropdownCategories(!dropdownCategories)}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Selecionar categorias
          <HiChevronDown className="w-4 h-4 ml-2" />
        </button>

        <div
          ref={dropdownCategoriesRef}
          className={classNames(
            dropdownCategories ? "block" : "hidden",
            "absolute mt-2 z-10 bg-white rounded-lg shadow w-60 dark:bg-gray-600"
          )}
        >
          <div className="p-3">
            <label htmlFor="input-group-search" className="sr-only">
              Buscar
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <HiSearch className="w-5 h-5 text-gray-500 dark:text-gray-400" />
              </div>
              <input
                type="text"
                value={searchCategoriesValue}
                onKeyUp={(e) => setSearchCategories(e.target.value)}
                onChange={(e) => setSearchCategoriesValue(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Buscar categoria"
              />
              {searchCategories != "" && (
                <div
                  className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
                  onClick={() => {
                    setSearchCategories("");
                    setSearchCategoriesValue("");
                  }}
                >
                  <HiX className="w-4 h-4 text-gray-400 hover:text-gray-900 dark:hover:text-white" />
                </div>
              )}
            </div>
          </div>
          <ul
            className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownSearchButton"
          >
            {listCategories(searchCategories).map((item) => (
              <fieldset key={item.key} name={`categories.${item.key}`}>
                <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                  <input
                    {...register(`categories.${item.key}.key`)}
                    value={item.key}
                    className="hidden"
                  />
                  <input
                    {...register(`categories.${item.key}.name`)}
                    value={item.name}
                    className="hidden"
                  />
                  <input
                    {...register(`categories.${item.key}.selected`)}
                    id={`checkbox-${item.key}`}
                    type="checkbox"
                    defaultChecked={item.selected}
                    value={item.selected ? 1 : 0}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    onClick={() => {
                      let actualCategory = categories.find(
                        ({ key }) => key === item.key
                      );
                      actualCategory.selected = !actualCategory.selected;
                      setCategories(categories);
                    }}
                  />
                  <label
                    htmlFor={`checkbox-${item.key}`}
                    className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer select-none"
                  >
                    {item.name}
                  </label>
                </div>
              </fieldset>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
