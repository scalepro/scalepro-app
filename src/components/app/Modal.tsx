import { classNames } from "@/services/functions";
import { HiX } from "react-icons/hi";

export default function Modal({
  titleModal,
  openedModal,
  setOpenedModal,
  children,
}) {
  return (
    <>
      <div
        tabIndex="-1"
        aria-hidden="true"
        className={classNames(
          openedModal ? "flex" : "hidden",
          "fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full justify-center items-center"
        )}
      >
        <div className="relative w-full h-full max-w-2xl md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {titleModal}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setOpenedModal(false)}
              >
                <HiX className="w-5 h-5" />
                <span className="sr-only">Fechar</span>
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
      {openedModal && (
        <div className="bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40"></div>
      )}
    </>
  );
}
