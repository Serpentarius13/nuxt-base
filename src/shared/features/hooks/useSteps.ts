export const useSteps = () => {
  const step = ref<number>(1);

  const incStep = () => step.value++;
  const decStep = () => step.value - 1 >= 0 && step.value--;
  const setStep = (stepNum: number) => (step.value = stepNum);

  return { step, incStep, decStep, setStep };
};
