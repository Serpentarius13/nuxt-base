export function useHover() {
  const isHovering = ref<boolean>(false);

  const onHover = () => (isHovering.value = true);
  const onUnhover = () => (isHovering.value = false);

  return { isHovering, onHover, onUnhover };
}
