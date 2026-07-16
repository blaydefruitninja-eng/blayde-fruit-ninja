import { createFileRoute } from "@tanstack/react-router";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import spearsImg from "@/assets/product-spears.png";
import punchImg from "@/assets/product-punch.png";
import foxieImg from "@/assets/product-foxie.png";
import shotImg from "@/assets/product-shot.png";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Fruit Ninja on Route 66" },
      {
        name: "description",
        content:
          "Fruit Ninja menu: 3-Spear Bags, Kool-Aid Punches, Coffee-Juice Foxies, add-ons and Route 66 series drops.",
      },
      { property: "og:title", content: "Menu — Fruit Ninja" },
      {
        property: "og:description",
        content: "Spears, punches, foxies. Sliced fresh on Route 66.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

type Item = { name: string; emoji?: string };

function MenuPage() {
  return (
    <div className="min-h-screen">
      <SiteNav />

      <section className="border-b-[3px] border-ninja-ink bg-stripes py-10">
        <div className="mx-auto max-w-7xl px-6 text-center md:px-8">
          <div className="inline-block rotate-[-2deg] rounded-2xl ninja-border bg-ninja-ink px-6 py-2 font-display text-ninja-cream shadow-pop">
            ⚔️ THE MENU
          </div>
          <h1 className="mt-4 font-display text-5xl text-ninja-ink text-stroke-ink md:text-7xl">
            SLICE. SIP. <span className="text-white">REPEAT.</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl font-bounce text-lg">
            Sharpened daily on the corner of Winslow, AZ.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl space-y-16 px-6 py-16 md:px-8">
        <MenuSection
          title="FRUIT NINJA SPEARS"
          subtitle="3-Spear Bags"
          price="$6"
          bg="bg-ninja-orange"
          image={spearsImg}
          badge={{ label: "HOT!", color: "bg-ninja-pink text-white" }}
          items={[
            { name: "Watermelon Lime", emoji: "🍉" },
            { name: "Pineapple Chili", emoji: "🍍" },
            { name: "Mango Mint", emoji: "🥭" },
            { name: "Cactus Pear", emoji: "🌵" },
            { name: "Sunset Citrus", emoji: "🌅" },
            { name: "Fruit Ninja Combo", emoji: "🥋" },
          ]}
        />

        <MenuSection
          title="FRUIT NINJA PUNCHES"
          subtitle="12oz Bottles · Kool-Aid Infused 🥤"
          price="$4–$5"
          bg="bg-ninja-pink text-white"
          image={punchImg}
          reverse
          badge={{ label: "NEW!", color: "bg-ninja-yellow text-ninja-ink" }}
          items={[
            { name: "Tropical Tsunami", emoji: "🌊" },
            { name: "Cherry Chop", emoji: "🍒" },
            { name: "Grape Getaway", emoji: "🍇" },
            { name: "Blue Blaze", emoji: "💙" },
          ]}
        />

        <MenuSection
          title="FRUIT NINJA FOXIES"
          subtitle="12oz Coffee-Juice"
          price="$6–$8"
          bg="bg-ninja-blue"
          image={foxieImg}
          badge={{ label: "ROUTE 66", color: "bg-ninja-ink text-ninja-cream", route66: true }}
          items={[
            { name: "Pineapple Cold Brew", emoji: "🍍☕" },
            { name: "Mango Espresso", emoji: "🥭☕" },
            { name: "Raspberry Mocha", emoji: "🍓☕" },
          ]}
        />

        <AddOnsBlock />
      </main>

      <SiteFooter />
    </div>
  );
}

function MenuSection({
  title,
  subtitle,
  price,
  items,
  bg,
  image,
  badge,
  reverse,
}: {
  title: string;
  subtitle: string;
  price: string;
  items: Item[];
  bg: string;
  image: string;
  badge?: { label: string; color: string; route66?: boolean };
  reverse?: boolean;
}) {
  return (
    <section
      className={`relative rounded-[2rem] ninja-border shadow-pop-lg ${bg} p-6 md:p-10`}
    >
      {badge && (
        <div className="absolute -top-4 right-6 z-10 rotate-[8deg]">
          {badge.route66 ? (
            <Route66Badge />
          ) : (
            <span
              className={`inline-block rounded-full ninja-border ${badge.color} px-4 py-2 font-display text-sm shadow-pop-sm animate-wobble`}
            >
              {badge.label}
            </span>
          )}
        </div>
      )}

      <div
        className={`grid gap-8 md:grid-cols-[1fr,1.4fr] md:items-center ${
          reverse ? "md:grid-flow-dense" : ""
        }`}
      >
        <div
          className={`relative flex items-center justify-center ${
            reverse ? "md:col-start-2" : ""
          }`}
        >
          <div className="absolute inset-6 rounded-full bg-white/40 blur-2xl" />
          <img
            src={image}
            alt={title}
            width={900}
            height={900}
            loading="lazy"
            className="relative w-64 max-w-full drop-shadow-[8px_8px_0_var(--ninja-ink)] transition-transform hover:animate-wobble md:w-80"
          />
        </div>

        <div>
          <h2 className="font-display text-3xl leading-tight text-stroke-ink md:text-5xl">
            {title}
          </h2>
          <div className="mt-1 font-bounce text-lg opacity-90">{subtitle}</div>

          <div className="mt-4 inline-block rotate-[-2deg] rounded-2xl ninja-border bg-white px-5 py-2 shadow-pop">
            <span className="font-display text-3xl text-ninja-ink md:text-4xl">
              {price}
            </span>
          </div>

          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {items.map((it) => (
              <li
                key={it.name}
                className="flex items-center gap-3 rounded-2xl ninja-border bg-white px-4 py-2 shadow-pop-sm hover-pop"
              >
                <span className="text-2xl">{it.emoji}</span>
                <span className="font-bounce font-bold text-ninja-ink">
                  {it.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function AddOnsBlock() {
  return (
    <section className="grid gap-6 md:grid-cols-2">
      <div className="rounded-[2rem] ninja-border bg-ninja-yellow p-8 shadow-pop-lg">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="inline-block rounded-full ninja-border bg-white px-3 py-1 font-display text-xs shadow-pop-sm">
              ADD-ONS
            </div>
            <h3 className="mt-3 font-display text-3xl">EXTRA JUICE SHOT</h3>
            <p className="mt-1 font-bounce">One more hit. One more highway mile.</p>
            <div className="mt-4 inline-block rotate-[-2deg] rounded-2xl ninja-border bg-ninja-pink px-4 py-2 shadow-pop">
              <span className="font-display text-3xl text-white">$1 💥</span>
            </div>
          </div>
          <img
            src={shotImg}
            alt="Juice shot"
            width={900}
            height={900}
            loading="lazy"
            className="w-32 shrink-0 animate-pulse-glow md:w-40"
          />
        </div>
      </div>

      <div className="relative rounded-[2rem] ninja-border bg-ninja-ink p-8 text-ninja-cream shadow-pop-lg">
        <div className="absolute -top-4 left-6 rotate-[-6deg]">
          <Route66Badge />
        </div>
        <h3 className="mt-4 font-display text-3xl">LIMITED FLAVORS</h3>
        <p className="mt-2 font-bounce opacity-90">
          Rotating Route 66 Series drops. Blink and you'll miss 'em, kid.
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {["Prickly Pear Punch", "Desert Rose Foxie", "Sunset Neon Spear"].map(
            (t) => (
              <span
                key={t}
                className="rounded-full border-[3px] border-ninja-cream px-3 py-1 font-display text-xs"
              >
                {t}
              </span>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

function Route66Badge() {
  return (
    <div className="relative">
      <svg width="90" height="100" viewBox="0 0 90 100" className="drop-shadow-[4px_4px_0_var(--ninja-ink)]">
        <path
          d="M 10 15 Q 10 5 20 5 h 50 Q 80 5 80 15 v 40 Q 80 75 45 95 Q 10 75 10 15 Z"
          fill="white"
          stroke="var(--ninja-ink)"
          strokeWidth="4"
        />
        <text
          x="45"
          y="35"
          textAnchor="middle"
          fontFamily="Bungee, sans-serif"
          fontSize="10"
          fill="var(--ninja-ink)"
        >
          ROUTE
        </text>
        <text
          x="45"
          y="65"
          textAnchor="middle"
          fontFamily="Bungee, sans-serif"
          fontSize="28"
          fill="var(--ninja-pink)"
        >
          66
        </text>
      </svg>
    </div>
  );
}
