const isDark = useDark()

export function useDarkMode() {
  const toggleDark = useToggle(isDark)

  return {
    toggleDark,
  }
}
