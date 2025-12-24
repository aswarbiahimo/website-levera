import { Menu } from "lucide-react";

interface HeaderProps {
  onViewMenu?: () => void;
}

export function Header({ onViewMenu }: HeaderProps) {
  return (
    <header className="border-b border-[var(--color-border)] bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <div className="w-10 h-10 border-2 border-[var(--color-accent)] flex items-center justify-center mr-3">
            <span className="text-[var(--color-accent)]">L</span>
          </div>
          <h1 className="text-2xl">LEVERA</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            Home
          </a>
          <a
            href="#menu"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            Menu
          </a>
          <a
            href="#about"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            About
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            Contact
          </a>
          <button className="px-6 py-2 border-2 border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)] hover:text-white transition-colors">
            Reserve
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={onViewMenu} className="md:hidden">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
