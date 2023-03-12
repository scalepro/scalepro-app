import { useState, useEffect, useRef } from "react";
import { classNames } from "@/services/functions";
import { HiChevronDown, HiSearch, HiX } from "react-icons/hi";
import { defaultLabel } from "@/styles/StyledElements";

export default function DropdownCategories({
  register,
  setValue,
  inputName,
  messsageLabel,
  categories,
  setCategories,
}) {
  const [dropdownOpened, setDropdownOpened] = useState(false);
  const [searchCategories, setSearchCategories] = useState("");
  const [searchCategoriesValue, setSearchCategoriesValue] = useState("");
  const dropdownCategoriesRef = useRef(null);

  const listCategories = (searchCategories) => {
    if (searchCategories != "") {
      return categories.filter((item) =>
        item.name.toLowerCase().includes(searchCategories.toLowerCase())
      );
    } else {
      return categories;
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        dropdownCategoriesRef.current &&
        !dropdownCategoriesRef.current.contains(event.target as Node)
      ) {
        setDropdownOpened(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <span className={defaultLabel}>Categorias</span>
      <button
        onClick={() => setDropdownOpened(!dropdownOpened)}
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        {messsageLabel}
        <HiChevronDown className="w-4 h-4 ml-2" />
      </button>

      <div
        ref={dropdownCategoriesRef}
        className={classNames(
          dropdownOpened ? "block" : "hidden",
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
        <ul className="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200">
          {listCategories(searchCategories).map((item) => (
            <fieldset key={item.key} name={`${inputName}.${item.key}`}>
              <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                <input
                  {...register(`${inputName}.${item.key}.key`)}
                  value={item.key}
                  className="hidden"
                />
                <input
                  {...register(`${inputName}.${item.key}.name`)}
                  value={item.name}
                  className="hidden"
                />
                <input
                  {...register(`${inputName}.${item.key}.selected`)}
                  type="checkbox"
                  defaultChecked={item.selected}
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
                  htmlFor={`checkbox-${inputName}-${item.key}`}
                  className="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer select-none"
                >
                  {item.name}
                </label>
              </div>
            </fieldset>
          ))}
        </ul>
      </div>
    </>
  );
}
