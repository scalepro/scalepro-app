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
          placeholder="ex.: SÓ HOJE! FRETE GRÁTIS PARA TODO O BRASIL"
          required={false}
        />
      </div>
      <div className="col-span-4">
        <InputText
          errors={errors}
          register={register}
          messsageLabel="Mensagem da newsletter"
          inputName="newsletter_message"
          placeholder="ex.: Cadastre-se para receber nossas ofertas"
          required={false}
        />
      </div>
    </>
  );
}
