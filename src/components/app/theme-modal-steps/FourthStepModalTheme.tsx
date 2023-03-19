import InputText from "@/components/app/forms/flowbite/InputText";
import InputPhone from "@/components/app/forms/custom/InputPhone";
import AccordionHours from "@/components/app/forms/custom/AccordionHours";

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
        <AccordionHours
          inputName="company_hours"
          messsageLabel="Horário de atendimento"
          register={register}
          setValue={setValue}
        />
      </div>
    </>
  );
}
