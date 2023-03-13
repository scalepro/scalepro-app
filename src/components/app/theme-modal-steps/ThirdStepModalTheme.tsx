import InputText from "@/components/app/forms/flowbite/InputText";

export default function ThirdStepModalTheme({ errors, register, setValue }) {
  return (
    <>
      <div className="col-span-4">
        <InputText
          errors={errors}
          register={register}
          messsageLabel="Nome da empresa"
          inputName="company_name"
          placeholder="ex.: Scaler PRO"
          required={true}
        />
      </div>
      <div className="col-span-4">
        <InputText
          errors={errors}
          register={register}
          messsageLabel="Endereço da empresa"
          inputName="address_company"
          placeholder="ex.: Rua Florisvaldo Peixoto, 000, Bairro, Cidade / ES"
          required={true}
        />
      </div>
    </>
  );
}
