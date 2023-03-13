
export default function InputCNPJ({}) {
  return (
    <>
      <label htmlFor="cpf" className={defaultLabel}>
        CPF
      </label>
      <Controller
        control={control}
        name="cpf"
        rules={{
          required: true,
          validate: (value) => validateCpf(value) || "Digite um CPF válido",
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <MaskedInput
            mask={[
              /\d/,
              /\d/,
              /\d/,
              ".",
              /\d/,
              /\d/,
              /\d/,
              ".",
              /\d/,
              /\d/,
              /\d/,
              "-",
              /\d/,
              /\d/,
            ]}
            guide={false}
            value={value}
            onBlur={onBlur}
            onChange={onChange}
            className={classNames(
              errors.cpf &&
                (errors.cpf.message || errors.cpf.type === "required")
                ? errorInput
                : defaultInput,
              "focus-visible:ring-primary-500 focus-visible:border-primary-500"
            )}
            placeholder="000.000.000-00"
          />
        )}
      />
      {errors.cpf &&
        ((errors.cpf.type === "required" && (
          <p className={errorFormMessage}>Este campo é obrigatório</p>
        )) ||
          (errors.cpf.message && (
            <span className={errorFormMessage}>
              <>{errors.cpf.message}</>
            </span>
          )))}
    </>
  );
}
