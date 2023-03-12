import { Button } from "flowbite-react";

export default function StepperController({
  actualStep,
  setActualStep,
  maxValueStep,
}) {
  return (
    <>
      {actualStep > 0 && (
        <Button onClick={() => setActualStep(actualStep - 1)}>Voltar</Button>
      )}
      {actualStep < maxValueStep && (
        <Button onClick={() => setActualStep(actualStep + 1)}>Avançar</Button>
      )}
    </>
  );
}
