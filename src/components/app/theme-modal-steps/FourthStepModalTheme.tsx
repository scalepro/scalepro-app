import InputText from "@/components/app/forms/flowbite/InputText";
import InputPhone from "@/components/app/forms/custom/InputPhone";

export default function FourthStepModalTheme({
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
          messsageLabel="E-mail para contato"
          inputName="company_mail"
          placeholder="ex.: exemplo@empresa.com"
          required={true}
        />
      </div>
      <div className="col-span-4">
        <InputPhone
          errors={errors}
          control={control}
          messsageLabel="Número de telefone"
          inputName="company_phone"
          placeholder="(00) 00000-0000"
          required={false}
        />
      </div>
      <div className="col-span-4">
        <InputText
          errors={errors}
          register={register}
          messsageLabel="Horário de atendimento"
          inputName="company_hours"
          placeholder="ex.: Segunda à Sexta, das 9 às 17 horas (exceto feriados)."
          required={true}
        />
      </div>
    </>
  );
}
