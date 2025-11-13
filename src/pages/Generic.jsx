export default function Generic({ title }) {
  return (
    <section className="min-h-[60vh] bg-black text-white pt-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-semibold">{title}</h1>
        <p className="mt-4 text-white/80 max-w-2xl">All the original content and pages will be preserved. This is a visual and experience redesign. We will migrate existing text, images, and structure into this modern interface.</p>
      </div>
    </section>
  );
}
