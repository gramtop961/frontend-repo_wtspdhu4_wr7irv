import { Compass, ShieldCheck, Plane, Landmark, Wallet } from 'lucide-react';

export function Services() {
  const items = [
    { icon: Plane, title: 'Flights & Hotels', desc: 'Global flight booking and handpicked stays that fit your vibe and budget.' },
    { icon: Landmark, title: 'Tours & Packages', desc: 'Ready-made and fully custom itineraries for solo, family, and corporate travel.' },
    { icon: Wallet, title: 'Visas & Insurance', desc: 'Hassle-free processing for visas, travel insurance, forex and documentation.' },
    { icon: ShieldCheck, title: '24/7 Assistance', desc: 'Real humans, real-time support throughout your journey.' },
    { icon: Compass, title: 'Curated Experiences', desc: 'Desert safaris, island getaways, cultural trails, cruises and more.' },
  ];

  return (
    <section id="services" className="bg-black py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-white text-3xl sm:text-4xl font-semibold">Everything you need for effortless travel</h2>
        <p className="text-white/70 mt-2 max-w-2xl">All the original content from the current site will be preserved — we’re upgrading the experience and visuals.</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-white/5 p-5 text-white hover:bg-white/10 transition">
              <Icon className="text-orange-300" />
              <h3 className="mt-4 text-lg font-medium text-white">{title}</h3>
              <p className="text-sm text-white/80 mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Highlights() {
  const badges = ['IATA-aligned partners', 'Flexible payment options', 'Group & MICE travel', 'Cruises & luxury stays'];
  return (
    <section className="bg-black py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap gap-2">
          {badges.map((b) => (
            <span key={b} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
