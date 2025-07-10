export default function Calculator() {
  return (
    <section className="w-full max-w-2xl mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">Proskill Resin Calculator</h1>
      <p className="text-lg mb-8">
  Use our resin calculator to estimate and plan the exact amount of resin you'll need for your projects.
</p>
      <a
        href="https://calculator.proskilledu.com"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-8 py-3 rounded-full border border-black dark:border-white text-lg font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
      >
        Go to Resin Calculator
      </a>
    </section>
  );
} 