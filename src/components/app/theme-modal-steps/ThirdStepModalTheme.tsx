import InputText from "@/components/app/forms/flowbite/InputText";
import InputCNPJ from "@/components/app/forms/custom/InputCNPJ";

export default function ThirdStepModalTheme({
  errors,
  register,
  control,
  setValue,
}) {
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
          inputName="company_address"
          placeholder="ex.: Rua Florisvaldo Peixoto, 000, Bairro, Cidade / ES"
          required={true}
        />
      </div>
      <div className="col-span-4">
        <InputCNPJ
          errors={errors}
          control={control}
          messsageLabel="Número de CNPJ"
          inputName="cnpj"
          placeholder="00.000.000/0000-00"
          required={false}
        />
      </div>
    </>
  );
}
