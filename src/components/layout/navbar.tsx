import { ToggleTheme } from '@/components/toogle-theme'

export const Navbar = () => {
  return (
    <header className="shadow-sm bg-gray-100 dark:bg-gray-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div>
          <a href="/" className="text-2xl font-bebas-neue">
            Fitness - Dashboard
          </a>
        </div>
        <div className="flex lg:flex-1">
          <div className="lg:flex lg:flex-1 lg:justify-end">
            <ToggleTheme />
          </div>
        </div>
      </nav>
    </header>
  )
}
