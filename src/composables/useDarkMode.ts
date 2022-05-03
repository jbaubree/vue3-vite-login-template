const isDark = useDark()

export default function useDarkMode() {
  const toggleDark = useToggle(isDark)

  return {
    toggleDark,
  }
}
