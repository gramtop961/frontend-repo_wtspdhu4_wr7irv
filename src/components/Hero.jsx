import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/O-AdlP9lTPNz-i8a/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80 mb-4">
            Seamless travel planning • 24/7 assistance • Trusted by explorers
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-white">
            Elevate your journeys with modern, curated travel experiences
          </h1>
          <p className="mt-4 text-white/80 max-w-xl">
            We craft bespoke vacations across the globe — flights, stays, visas, insurance, and curated adventures — all in one place.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#packages" className="inline-flex items-center justify-center rounded-md bg-white text-black px-5 py-3 font-medium hover:bg-white/90 transition">
              Explore Packages
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-white/10 text-white px-5 py-3 font-medium hover:bg-white/20 transition">
              Talk to a Specialist
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
    </section>
  );
}
