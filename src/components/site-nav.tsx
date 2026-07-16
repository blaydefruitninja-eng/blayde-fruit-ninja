import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-ninja-ink bg-ninja-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 md:px-8">
        <Link to="/" className="group flex items-center gap-2">
          <div className="grid size-11 place-items-center rounded-full ninja-border shadow-pop-sm bg-ninja-pink text-white animate-spin-slow">
            <span className="font-display text-xl">★</span>
          </div>
          <span className="font-display text-lg leading-none md:text-xl">
            FRUIT<span className="text-ninja-pink">NINJA</span>
          </span>
        </Link>

        <nav className="flex items-center gap-2 md:gap-3">
          <NavTab to="/">HOME</NavTab>
          <NavTab to="/menu">MENU</NavTab>
        </nav>
      </div>
    </header>
  );
}

function NavTab({ to, children }: { to: "/" | "/menu"; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="font-display text-sm md:text-base px-4 py-2 rounded-full ninja-border bg-white shadow-pop-sm hover-pop"
      activeProps={{ className: "!bg-ninja-yellow" }}
      activeOptions={{ exact: true }}
    >
      {children}
    </Link>
  );
}
