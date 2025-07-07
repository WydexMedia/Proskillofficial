const courses = [
  {
    title: "Digital Marketing Mastery",
    description: "Learn the latest digital marketing strategies and tools to grow your business or career.",
  },
  {
    title: "Data Analysis & Visualization",
    description: "Master data analysis techniques and visualization tools for impactful insights.",
  },
  {
    title: "Web Development Bootcamp",
    description: "From basics to advanced, build modern web applications with hands-on projects.",
  },
  {
    title: "Personal Branding & Communication",
    description: "Develop your personal brand and communication skills for professional success.",
  },
];

export default function Courses() {
  return (
    <section className="w-full max-w-3xl mx-auto py-16 px-4 text-center">
      <h1 className="text-4xl font-bold mb-8">Our Courses</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {courses.map((course, idx) => (
          <div key={idx} className="border border-black dark:border-white rounded-lg p-6 bg-white dark:bg-black shadow-sm transition hover:scale-105 hover:shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
            <p className="text-base">{course.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 