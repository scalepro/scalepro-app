import { useState, useEffect, Fragment } from "react";
import { Button } from "flowbite-react";
import { useForm } from "react-hook-form";
import { classNames } from "@/services/functions";
import toast, { Toaster } from "react-hot-toast";
import Modal from "@/components/app/Modal";
import Toast from "@/components/app/Toast";
import Stepper from "@/components/app/Stepper";
import StepperController from "@/components/app/StepperController";
import FirstStepModalTheme from "@/components/app/theme-modal-steps/FirstStepModalTheme";
import SecondStepModalTheme from "@/components/app/theme-modal-steps/SecondStepModalTheme";
import ThirdStepModalTheme from "@/components/app/theme-modal-steps/ThirdStepModalTheme";
import FourthStepModalTheme from "@/components/app/theme-modal-steps/FourthStepModalTheme";
import ButtonSent from "@/components/app/forms/custom/ButtonSent";
import { contentModal, footerModal } from "@/styles/StyledElements";
import {
  HiColorSwatch,
  HiNewspaper,
  HiClipboardList,
  HiPhone,
  HiCheck,
} from "react-icons/hi";

export default function InstallThemeModal({
  themeModalView,
  setThemeModalView,
}) {
  const definedCategories = [
    {
      key: 0,
      name: "Casa e Cozinha",
      selected: false,
    },
    {
      key: 1,
      name: "Saúde e Beleza",
      selected: false,
    },
    {
      key: 2,
      name: "Jardinagem",
      selected: false,
    },
    {
      key: 3,
      name: "Fitness",
      selected: false,
    },
    {
      key: 4,
      name: "Eletrônicos",
      selected: false,
    },
    {
      key: 5,
      name: "Calçados",
      selected: false,
    },
    {
      key: 6,
      name: "Bebê",
      selected: false,
    },
  ];

  const colors = [
    "#f44336",
    "#1976d2",
    "#e91e63",
    "#689f38",
    "#fbc02d",
    "#e57373",
    "#64b5f6",
    "#f06292",
    "#aed581",
    "#fff176",
  ];

  const themeDetails = {
    key: 0,
    name: "Cooper",
    defaultValues: {
      primaryColor: "#1976D2",
      secondaryColor: "#64B5F6",
      headerPrimary: true,
    },
    colors: colors,
  };

  const infoSteps = [
    {
      name: "colors",
      icon: HiColorSwatch,
    },
    {
      name: "messages",
      icon: HiNewspaper,
    },
    {
      name: "company",
      icon: HiClipboardList,
    },
    {
      name: "support",
      icon: HiPhone,
    },
  ];

  const [primaryColor, setPrimaryColor] = useState(
    themeDetails.defaultValues.primaryColor
  );
  const [secondaryColor, setSecondaryColor] = useState(
    themeDetails.defaultValues.secondaryColor
  );
  const [headerPrimary, setHeaderPrimary] = useState(
    themeDetails.defaultValues.headerPrimary
  );

  const [actualStep, setActualStep] = useState(0);
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const defaultValues = {
    primary_color: themeDetails.defaultValues.primaryColor,
    secondary_color: themeDetails.defaultValues.secondaryColor,
    header_primary: themeDetails.defaultValues.headerPrimary,
    header_message: "",
    company_name: "",
    company_address: "",
    cnpj: "",
    company_mail: "",
    company_phone: "",
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues,
  });

  const resetElements = () => {
    reset();
    setPrimaryColor("#AABBCC");
    setSecondaryColor("#BBCCDD");
    setHeaderPrimary(false);
  };

  useEffect(() => {
    if (errors["primary_color"] || errors["secondary_color"]) {
      setActualStep(0);
    } else if (errors["company_name"] || errors["company_address"]) {
      setActualStep(2);
    } else if (errors["company_mail"]) {
      setActualStep(3);
    }
  }, [errors]);

  const onSubmit = (data) => {
    setLoadingSubmit(true);
    setTimeout(() => {
      setLoadingSubmit(false);
      setActualStep(actualStep + 1);
      setTimeout(() => {
        setThemeModalView(false);
        setActualStep(0);
        resetElements();
        toast.custom((t) => (
          <Toast
            type="success"
            title="Tema instalado com sucesso!"
            toast={toast}
            id={t.id}
          />
        ));
      }, 1000);
    }, 5000);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <Fragment>
        <Modal
          titleModal={"Instalar tema"}
          openedModal={themeModalView}
          setOpenedModal={setThemeModalView}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={contentModal}>
              <>
                <div className="mb-4">
                  <Stepper infoSteps={infoSteps} actualStep={actualStep} />
                </div>
                <div
                  id="firstStep"
                  className={classNames(
                    actualStep == 0 ? "block" : "hidden",
                    "grid grid-cols-4 gap-4"
                  )}
                >
                  <FirstStepModalTheme
                    colors={colors}
                    errors={errors}
                    control={control}
                    setValue={setValue}
                    primaryColor={primaryColor}
                    setPrimaryColor={setPrimaryColor}
                    secondaryColor={secondaryColor}
                    setSecondaryColor={setSecondaryColor}
                    headerPrimary={headerPrimary}
                    setHeaderPrimary={setHeaderPrimary}
                  />
                </div>
                <div
                  id="secondStep"
                  className={classNames(
                    actualStep == 1 ? "block" : "hidden",
                    "grid grid-cols-4 gap-4"
                  )}
                >
                  <SecondStepModalTheme
                    errors={errors}
                    register={register}
                    setValue={setValue}
                  />
                </div>
                <div
                  id="thirdStep"
                  className={classNames(
                    actualStep == 2 ? "block" : "hidden",
                    "grid grid-cols-4 gap-4"
                  )}
                >
                  <ThirdStepModalTheme
                    errors={errors}
                    register={register}
                    control={control}
                    setValue={setValue}
                  />
                </div>
                <div
                  id="fourthStep"
                  className={classNames(
                    actualStep >= 3 ? "block" : "hidden",
                    "grid grid-cols-4 gap-4"
                  )}
                >
                  <FourthStepModalTheme
                    errors={errors}
                    register={register}
                    control={control}
                    setValue={setValue}
                  />
                </div>
              </>
            </div>

            <div className={footerModal}>
              <div className="w-full flex justify-end gap-3">
                {actualStep == 0 && (
                  <Button
                    color="gray"
                    onClick={() => {
                      setThemeModalView(false);
                      resetElements();
                    }}
                  >
                    Cancelar
                  </Button>
                )}
                <StepperController
                  actualStep={actualStep}
                  setActualStep={setActualStep}
                  maxValueStep={infoSteps.length - 1}
                />
                {actualStep == infoSteps.length - 1 && (
                  <ButtonSent
                    loadingSubmit={loadingSubmit}
                    actionName="Enviar"
                  />
                )}
                {actualStep > infoSteps.length - 1 && (
                  <Button color="blue" disabled={true}>
                    Enviado
                    <HiCheck className="ml-2 h-5 w-5" />
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Modal>
      </Fragment>
    </>
  );
}
