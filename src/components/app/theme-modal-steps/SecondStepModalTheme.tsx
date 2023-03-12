import InputText from "@/components/app/forms/flowbite/InputText";
import DropdownCategories from "@/components/app/forms/custom/DropdownCategories";

export default function SecondStepModalTheme({
  errors,
  register,
  setValue,
  categories,
  setCategories,
}) {
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
        <DropdownCategories
          register={register}
          inputName="categories"
          messsageLabel="Selecionar categorias"
          categories={categories}
          setCategories={setCategories}
        />
      </div>
    </>
  );
}
