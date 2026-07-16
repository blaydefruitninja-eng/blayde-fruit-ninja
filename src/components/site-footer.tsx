export function SiteFooter() {
  return (
    <footer className="mt-24 border-t-[3px] border-ninja-ink bg-ninja-ink text-ninja-cream">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-10 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <div className="grid size-12 place-items-center rounded-full border-[3px] border-ninja-cream bg-ninja-pink font-display text-xl">
            66
          </div>
          <div className="font-display text-sm md:text-base">
            © FRUIT NINJA — CORNER OF WINSLOW, AZ
          </div>
        </div>
        <div className="font-bounce text-sm opacity-80">
          Slicing fruit on Route 66 since forever ⚔️🍉
        </div>
      </div>
    </footer>
  );
}
