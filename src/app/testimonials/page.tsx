export default function Testimonials() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-6">What Our Learners Say</h1>
      <p className="text-lg mb-8">Hear from our community about their Proskill experience.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-black border border-black dark:border-white rounded-2xl shadow-lg p-4 flex flex-col items-center">
          <video controls width="100%" className="rounded-xl mb-2">
            <source src="/video/testimonial1.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bg-white dark:bg-black border border-black dark:border-white rounded-2xl shadow-lg p-4 flex flex-col items-center">
          <video controls width="100%" className="rounded-xl mb-2">
            <source src="/video/testimonial2.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="bg-white dark:bg-black border border-black dark:border-white rounded-2xl shadow-lg p-4 flex flex-col items-center">
          <video controls width="100%" className="rounded-xl mb-2">
            <source src="/video/testimonial3.MP4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
} 