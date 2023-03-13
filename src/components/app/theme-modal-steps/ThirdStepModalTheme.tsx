import InputText from "@/components/app/forms/flowbite/InputText";
import InputCPF from "@/components/app/forms/custom/InputCPF";

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
          inputName="address_company"
          placeholder="ex.: Rua Florisvaldo Peixoto, 000, Bairro, Cidade / ES"
          required={true}
        />
      </div>
      <div className="col-span-4">
        <InputCPF
          errors={errors}
          control={control}
          messsageLabel="Número de CPF"
          inputName="cpf"
          placeholder="000.000.000-00"
          required={true}
        />
      </div>
    </>
  );
}
