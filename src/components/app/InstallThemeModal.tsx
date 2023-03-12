import { useState, useEffect, useRef, Fragment } from "react";
import { Button, Spinner } from "flowbite-react";
import { useForm } from "react-hook-form";
import { classNames } from "@/services/functions";
import { HiColorSwatch, HiNewspaper, HiFlag } from "react-icons/hi";
import toast, { Toaster } from "react-hot-toast";
import Modal from "@/components/app/Modal";
import Toast from "@/components/app/Toast";
import Stepper from "@/components/app/Stepper";
import FirstStepModalTheme from "@/components/app/FirstStepModalTheme";
import SecondStepModalTheme from "@/components/app/SecondStepModalTheme";
import { contentModal, footerModal } from "@/styles/StyledElements";

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
      name: "finish",
      icon: HiFlag,
    },
  ];

  const [primaryColor, setPrimaryColor] = useState("#AABBCC");
  const [secondaryColor, setSecondaryColor] = useState("#BBCCDD");

  const [headerPrimary, setHeaderPrimary] = useState(false);
  const [dropdownCategories, setDropdownCategories] = useState(false);
  const dropdownCategoriesRef = useRef(null);
  const [categories, setCategories] = useState(definedCategories);
  const [searchCategories, setSearchCategories] = useState("");

  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const [actualStep, setActualStep] = useState(0);

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

  const defaultValues = {
    primary_color: primaryColor,
    secondary_color: secondaryColor,
    header_primary: false,
    header_message: "",
    categories: [],
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

  const onSubmit = (data) => {
    //setLoadingSubmit(true);
    console.log(data);
    /*
    setTimeout(() => {
      setLoadingSubmit(false);
      setThemeModalView(false);
      resetElements();
      toast.custom((t) => (
        <Toast
          type="success"
          title="Tema instalado com sucesso!"
          toast={toast}
          id={t.id}
        />
      ));
    }, 5000);
    */
  };

  const listCategories = (searchCategories) => {
    if (searchCategories != "") {
      return categories.filter((item) =>
        item.name.toLowerCase().includes(searchCategories.toLowerCase())
      );
    } else {
      return categories;
    }
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
                    register={register}
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
                    categories={categories}
                    setCategories={setCategories}
                    dropdownCategories={dropdownCategories}
                    setDropdownCategories={setDropdownCategories}
                    dropdownCategoriesRef={dropdownCategoriesRef}
                    searchCategories={searchCategories}
                    setSearchCategories={setSearchCategories}
                    listCategories={listCategories}
                  />
                </div>
              </>
            </div>

            <div className={footerModal}>
              <div className="w-full flex justify-end gap-3">
                {actualStep == 0 ? (
                  <Button
                    color="gray"
                    onClick={() => {
                      setThemeModalView(false);
                      resetElements();
                    }}
                  >
                    Cancelar
                  </Button>
                ) : (
                  <Button onClick={() => setActualStep(actualStep - 1)}>
                    Voltar
                  </Button>
                )}
                {actualStep < infoSteps.length - 1 ? (
                  <Button onClick={() => setActualStep(actualStep + 1)}>
                    Avançar
                  </Button>
                ) : (
                  <>
                    {!loadingSubmit ? (
                      <Button type="submit">Salvar</Button>
                    ) : (
                      <Button>
                        <div className="mr-3">
                          <Spinner size="sm" light={true} />
                        </div>
                        Salvando ...
                      </Button>
                    )}
                  </>
                )}
              </div>
            </div>
          </form>
        </Modal>
      </Fragment>
    </>
  );
}
