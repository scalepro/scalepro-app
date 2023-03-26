import { Button } from "flowbite-react";

export default function StepperController({
  actualStep,
  setActualStep,
  maxValueStep,
  nextHandle,
}) {
  return (
    <>
      {actualStep > 0 && actualStep <= maxValueStep && (
        <Button onClick={() => setActualStep(actualStep - 1)}>Voltar</Button>
      )}
      {actualStep < maxValueStep && (
        <Button
          onClick={async () =>
            (await nextHandle()) && setActualStep(actualStep + 1)
          }
        >
          Avançar
        </Button>
      )}
    </>
  );
}
