import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import blaydeActionAsset from "@/assets/blayde-action.png.asset.json";
import logoAsset from "@/assets/blayde-logo.png.asset.json";
const blaydeAction = blaydeActionAsset.url;
const logo = logoAsset.url;
import desert from "@/assets/desert-bg.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fruit Ninja — Corner of Winslow, AZ" },
      {
        name: "description",
        content:
          "Fruit Ninja by Blayde — fresh fruit spears, Kool-Aid punches & coffee-juice Foxies. Slinging flavor on the corner of Winslow, Arizona (Route 66).",
      },
      { property: "og:title", content: "Fruit Ninja — Corner of Winslow, AZ" },
      {
        property: "og:description",
        content: "Street-food from Blayde the Fruit Ninja on Route 66.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <SiteNav />
      <Hero />
      <AboutBlayde />
      <LocationBlock />
      <SocialsBlock />
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b-[3px] border-ninja-ink">
      <img
        src={desert}
        alt="Route 66 desert sunset with cacti"
        width={1920}
        height={1080}
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ninja-cream" />

      {/* floating stars */}
      <Star className="left-[8%] top-[18%] text-ninja-yellow animate-spin-slow" size={44} />
      <Star className="right-[10%] top-[12%] text-ninja-pink animate-spin-slow" size={60} />
      <Star className="left-[18%] bottom-[30%] text-ninja-blue animate-wobble" size={32} />

      <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-16 md:grid-cols-2 md:items-center md:gap-4 md:px-8 md:py-24">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full ninja-border shadow-pop-sm bg-ninja-blue px-4 py-1.5 font-display text-xs">
            <span>★</span> ROUTE 66 STREET FOOD
          </div>
          <h1 className="mt-5 font-display text-5xl leading-[0.95] text-white text-stroke-ink drop-shadow-[6px_6px_0_var(--ninja-ink)] md:text-7xl lg:text-8xl">
            FRUIT<br />
            <span className="text-ninja-yellow">NINJA</span>
          </h1>
          <p className="mt-5 max-w-md font-bounce text-lg text-white text-stroke-ink md:text-xl">
            Corner of Winslow, AZ. Sliced fresh. Served loud.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/menu"
              className="rounded-full ninja-border bg-ninja-pink px-6 py-3 font-display text-white shadow-pop hover-pop"
            >
              PEEP THE MENU →
            </Link>
            <a
              href="#location"
              className="rounded-full ninja-border bg-ninja-yellow px-6 py-3 font-display text-ninja-ink shadow-pop hover-pop"
            >
              FIND US
            </a>
          </div>
        </div>

        <div className="relative z-10 flex items-end justify-center md:justify-end">
          {/* Speech bubble */}
          <div className="absolute -left-2 top-4 z-20 hidden max-w-[220px] rotate-[-6deg] rounded-3xl ninja-border bg-white p-4 shadow-pop md:block">
            <p className="font-bounce text-sm leading-tight">
              "One spear. One slice. One highway."
            </p>
            <div className="absolute -bottom-3 left-8 h-5 w-5 rotate-45 border-b-[3px] border-r-[3px] border-ninja-ink bg-white" />
          </div>
          <img
            src={logo}
            alt="Blayde the Fruit Ninja logo"
            width={1024}
            height={1024}
            className="relative w-[90%] max-w-lg animate-bounce-y drop-shadow-[8px_8px_0_var(--ninja-ink)] md:w-full"
          />

        </div>
      </div>

      {/* zigzag divider */}
      <svg
        className="block w-full text-ninja-cream"
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        aria-hidden
      >
        <polygon
          points="0,40 60,0 120,40 180,0 240,40 300,0 360,40 420,0 480,40 540,0 600,40 660,0 720,40 780,0 840,40 900,0 960,40 1020,0 1080,40 1140,0 1200,40"
          fill="currentColor"
          stroke="var(--ninja-ink)"
          strokeWidth="3"
        />
      </svg>
    </section>
  );
}

function AboutBlayde() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <div className="grid gap-8 md:grid-cols-[1fr,1.2fr] md:items-center">
        <div className="relative">
          <div className="rotate-[-3deg] rounded-3xl ninja-border bg-ninja-yellow p-6 shadow-pop-lg">
            <img
              src={blayde}
              alt="Blayde cartoon avatar"
              width={1024}
              height={1280}
              loading="lazy"
              className="mx-auto w-full max-w-xs"
            />
            <div className="mt-2 text-center font-display text-2xl">BLAYDE</div>
            <div className="text-center font-bounce text-sm opacity-80">
              THE FRUIT NINJA
            </div>
          </div>
          <Star className="right-0 top-0 -translate-y-4 translate-x-4 text-ninja-pink animate-wobble" size={40} />
        </div>

        <div>
          <div className="inline-block rounded-full ninja-border bg-ninja-blue px-4 py-1 font-display text-xs shadow-pop-sm">
            ABOUT THE NINJA
          </div>
          <h2 className="mt-3 font-display text-4xl md:text-5xl">
            SLICES SO CLEAN THEY <span className="text-ninja-pink">WHISTLE</span>.
          </h2>

          <div className="relative mt-6 rounded-3xl ninja-border bg-white p-6 shadow-pop">
            <div className="absolute -top-3 left-8 h-5 w-5 rotate-45 border-l-[3px] border-t-[3px] border-ninja-ink bg-white" />
            <p className="font-bounce text-lg leading-relaxed">
              Yo — I'm Blayde. Grew up on Route 66 dust and mango pits. Now I set
              up on the <b>corner of Winslow</b> and hand out fruit spears sharp
              enough to wake up the desert. Kool-Aid punches, coffee-juice
              Foxies, secret combos — if it's on the board, I sliced it myself.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {["🥋 fresh daily", "🌵 desert grown", "🛣️ Route 66", "⚡ chaos flavor"].map((t) => (
              <span
                key={t}
                className="rounded-full ninja-border bg-ninja-cream px-4 py-1.5 font-display text-xs shadow-pop-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationBlock() {
  return (
    <section
      id="location"
      className="mx-auto max-w-7xl px-6 py-8 md:px-8 md:py-16"
    >
      <div className="rounded-3xl ninja-border bg-ninja-pink p-8 text-white shadow-pop-lg md:p-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <div className="inline-block rounded-full ninja-border bg-white px-4 py-1 font-display text-xs text-ninja-ink shadow-pop-sm">
              📍 CATCH US HERE
            </div>
            <h2 className="mt-4 font-display text-4xl md:text-6xl">
              WINSLOW,<br />ARIZONA
            </h2>
            <p className="mt-4 font-bounce text-lg opacity-95">
              On the corner, obviously. Look for the pink bandana and the line.
            </p>
            <p className="mt-2 font-bounce opacity-90">
              Open sunup till the ice runs out. Route 66, baby.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rotate-2 rounded-3xl border-[3px] border-white bg-ninja-yellow p-6 shadow-pop-lg">
              <svg viewBox="0 0 300 300" className="h-full w-full">
                {/* dotted road */}
                <path
                  d="M 40 260 Q 120 180 180 180 T 260 60"
                  stroke="var(--ninja-ink)"
                  strokeWidth="5"
                  strokeDasharray="12 10"
                  fill="none"
                  strokeLinecap="round"
                />
                {/* cacti */}
                <g stroke="var(--ninja-ink)" strokeWidth="4" fill="oklch(0.55 0.14 155)" strokeLinejoin="round">
                  <path d="M 60 240 v -40 a 10 10 0 0 1 20 0 v 40 z" />
                  <path d="M 55 210 h -10 v 20 h 10 z" />
                </g>
                {/* Route 66 shield */}
                <g transform="translate(200 200)">
                  <path
                    d="M -30 -30 Q -30 -40 -20 -40 h 40 Q 30 -40 30 -30 v 30 Q 30 10 0 30 Q -30 10 -30 -30 Z"
                    fill="white"
                    stroke="var(--ninja-ink)"
                    strokeWidth="4"
                  />
                  <text
                    x="0"
                    y="5"
                    textAnchor="middle"
                    fontFamily="Bungee, sans-serif"
                    fontSize="20"
                    fill="var(--ninja-ink)"
                  >
                    66
                  </text>
                </g>
                {/* map pin */}
                <g transform="translate(60 60)">
                  <circle r="26" fill="var(--ninja-pink)" stroke="var(--ninja-ink)" strokeWidth="4" />
                  <circle r="10" fill="white" stroke="var(--ninja-ink)" strokeWidth="3" />
                  <path d="M 0 20 L -14 44 L 14 44 Z" fill="var(--ninja-pink)" stroke="var(--ninja-ink)" strokeWidth="4" strokeLinejoin="round" />
                </g>
                <text
                  x="150"
                  y="285"
                  textAnchor="middle"
                  fontFamily="Bungee, sans-serif"
                  fontSize="16"
                  fill="var(--ninja-ink)"
                >
                  WINSLOW, AZ
                </text>
              </svg>
            </div>
            <Star className="-left-4 top-4 text-ninja-blue animate-wobble" size={40} />
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialsBlock() {
  const socials = [
    { name: "TikTok", handle: "@fruitninja", color: "bg-ninja-ink text-ninja-cream", icon: "♪" },
    { name: "Instagram", handle: "@fruitninja.az", color: "bg-ninja-pink text-white", icon: "◉" },
    { name: "YouTube", handle: "/fruitninja66", color: "bg-white text-ninja-ink", icon: "▶" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <h2 className="text-center font-display text-4xl md:text-5xl">
        SLIDE INTO OUR <span className="text-ninja-pink">DMs</span>
      </h2>
      <p className="mt-2 text-center font-bounce opacity-70">
        Slice content, drops & desert dispatches.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {socials.map((s) => (
          <a
            key={s.name}
            href="#"
            className={`group rounded-3xl ninja-border p-6 shadow-pop hover-pop ${s.color}`}
          >
            <div className="flex items-center gap-4">
              <div className="grid size-14 place-items-center rounded-full border-[3px] border-current bg-white/20 font-display text-2xl">
                {s.icon}
              </div>
              <div>
                <div className="font-display text-2xl">{s.name}</div>
                <div className="font-bounce text-sm opacity-80">{s.handle}</div>
              </div>
              <span className="ml-auto font-display text-2xl transition-transform group-hover:translate-x-1">
                →
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

function Star({
  className = "",
  size = 40,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      className={`absolute ${className}`}
      aria-hidden
    >
      <path
        d="M50 4 L61 39 L98 39 L68 60 L79 95 L50 74 L21 95 L32 60 L2 39 L39 39 Z"
        fill="currentColor"
        stroke="var(--ninja-ink)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}
