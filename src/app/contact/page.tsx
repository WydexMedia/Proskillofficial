export default function Contact() {
  return (
    <section className="w-full max-w-2xl mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg mb-8">We'd love to hear from you! Fill out the form below or reach us at <a href="mailto:info@proskilledu.com" className="underline">info@proskilledu.com</a>.</p>
      <form className="flex flex-col gap-4 items-center max-w-md mx-auto">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-black dark:border-white rounded bg-white dark:bg-black text-black dark:text-white" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-black dark:border-white rounded bg-white dark:bg-black text-black dark:text-white" />
        <textarea placeholder="Your Message" rows={5} className="w-full px-4 py-2 border border-black dark:border-white rounded bg-white dark:bg-black text-black dark:text-white" />
        <button type="submit" className="px-8 py-3 rounded-full border border-black dark:border-white text-lg font-bold hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition">Send Message</button>
      </form>
    </section>
  );
} 