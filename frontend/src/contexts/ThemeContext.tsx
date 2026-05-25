import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react'

type Theme = 'dark' | 'light'

type ThemeContextData = {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext =
  createContext<ThemeContextData>(
    {} as ThemeContextData
  )

type ThemeProviderProps = {
  children: ReactNode
}

export function ThemeProvider({
  children
}: ThemeProviderProps) {
  const [theme, setTheme] =
    useState<Theme>(() => {
      const storageTheme =
        localStorage.getItem('theme')

      return storageTheme === 'light'
        ? 'light'
        : 'dark'
    })

  useEffect(() => {
    document.documentElement.classList.remove(
      'light',
      'dark'
    )

    document.documentElement.classList.add(
      theme
    )

    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme((previousTheme) =>
      previousTheme === 'dark'
        ? 'light'
        : 'dark'
    )
  }

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}