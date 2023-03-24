import { Fragment } from "react";
import { classNames } from "@/services/functions";

export default function Stepper({ infoSteps, actualStep }) {
  const firstStep = infoSteps[0];
  const lastStep = infoSteps[infoSteps.length - 1];
  return (
    <div className="py-1">
      <ol className="flex items-center">
        <li className="flex items-center relative">
          <div
            className={classNames(
              actualStep > 0 ? "bg-green-500 dark:bg-green-600" : "bg-blue-700",
              "rounded-full flex items-center justify-center transition duration-300 ease-in-out h-8 w-8 py-3"
            )}
          >
            <firstStep.icon
              className={classNames(
                actualStep > 0 ? "dark:text-green-200" : "dark:text-blue-200",
                "w-4 h-4 text-gray-100"
              )}
              aria-hidden="true"
            />
          </div>
        </li>
        {infoSteps.length > 2 &&
          infoSteps.map((step, stepIdx) => (
            <Fragment key={stepIdx}>
              {stepIdx > 0 && stepIdx < infoSteps.length - 1 && (
                <>
                  <li
                    className={classNames(
                      actualStep >= stepIdx
                        ? "border-green-400 dark:border-green-500"
                        : "border-gray-200 dark:border-gray-500",
                      "flex-auto border-t-2 transition duration-300 ease-in-out"
                    )}
                  ></li>
                  <li className="flex items-center relative">
                    <div
                      className={classNames(
                        actualStep >= stepIdx
                          ? actualStep > stepIdx
                            ? "bg-green-500 dark:bg-green-600"
                            : "bg-blue-700"
                          : "bg-gray-300 dark:bg-gray-500",
                        "rounded-full flex items-center justify-center transition duration-300 ease-in-out h-8 w-8 py-3"
                      )}
                    >
                      <step.icon
                        className={classNames(
                          actualStep >= stepIdx
                            ? actualStep > stepIdx
                              ? "dark:text-green-200"
                              : "dark:text-blue-200"
                            : "text-gray-700 dark:text-gray-100",
                          "w-4 h-4 text-gray-100"
                        )}
                        aria-hidden="true"
                      />
                    </div>
                  </li>
                </>
              )}
            </Fragment>
          ))}
        <li
          className={classNames(
            actualStep == infoSteps.length - 1
              ? "border-green-400 dark:border-green-500"
              : "border-gray-200 dark:border-gray-500",
            "flex-auto border-t-2 transition duration-300 ease-in-out"
          )}
        ></li>
        <li className="flex items-center relative">
          <div
            className={classNames(
              actualStep >= infoSteps.length - 1
                ? actualStep > infoSteps.length - 1
                  ? "bg-green-500 dark:bg-green-600"
                  : "bg-blue-700"
                : "bg-gray-300 dark:bg-gray-500",
              "rounded-full flex items-center justify-center transition duration-300 ease-in-out h-8 w-8 py-3"
            )}
          >
            <lastStep.icon
              className={classNames(
                actualStep >= infoSteps.length - 1
                  ? actualStep > infoSteps.length - 1
                    ? "dark:text-green-200"
                    : "dark:text-blue-200"
                  : "text-gray-700 dark:text-gray-100",
                "w-4 h-4 text-gray-100"
              )}
              aria-hidden="true"
            />
          </div>
        </li>
      </ol>
    </div>
  );
}
