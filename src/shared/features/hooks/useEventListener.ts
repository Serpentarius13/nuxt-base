export function useEventListener(
  target: HTMLElement | Ref<HTMLElement | null> | Document,
  event: keyof DocumentEventMap,
  callback: (...args: any[]) => any
) {
  const targetIsElement = (
    target: HTMLElement | Ref<HTMLElement | null> | Document
  ): target is HTMLElement | Document => target instanceof HTMLElement;

  onMounted(() => {
    if (targetIsElement(target)) {
      target.addEventListener(event, callback);
    } else {
      if (target.value) {
        target.value.addEventListener(event, callback);
      }
    }
  });


  onUnmounted(() => {
    if (targetIsElement(target)) {
      target.removeEventListener(event, callback);
    } else {
      if (target.value) {
        target.value.removeEventListener(event, callback);
      }
    }
  });
}
