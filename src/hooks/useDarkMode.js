import { useEffect, useState } from 'react'
import useUiRelated from 'store/ui-related'

function useDarkMode() {
  const defaultTheme = typeof window !== 'undefined' && localStorage.theme
  const [theme, setTheme] = useState(defaultTheme)

  const { $setTheme } = useUiRelated((state) => state)

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark' && theme) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    if (typeof window !== 'undefined' && theme) {
      localStorage.setItem('theme', theme)
    }
    $setTheme(theme)
  }, [theme, $setTheme])
  return { theme, setTheme }
}
export default useDarkMode
