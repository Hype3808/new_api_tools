import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'

type ThemeMode = 'light' | 'dark'

interface ThemeToggleProps {
  theme: ThemeMode
  onToggle: () => void
  loading?: boolean
}

export function ThemeToggle({ theme, onToggle, loading }: ThemeToggleProps) {
  const isDark = theme === 'dark'

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onToggle}
      disabled={loading}
      className="text-muted-foreground hover:text-foreground"
      aria-label={isDark ? '切换到浅色主题' : '切换到深色主题'}
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="hidden sm:inline ml-2">{isDark ? '浅色' : '深色'}</span>
    </Button>
  )
}
