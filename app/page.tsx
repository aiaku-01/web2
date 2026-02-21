export default function Home() {
  return (
    <main className="space-y-20">

      {/* Hero Section */}
      <section className="text-center pt-20 pb-12 bg-gradient-to-br from-indigo-600 to-blue-500 text-white">
        <h1 className="text-5xl font-extrabold leading-tight">
          Build the <span className="text-yellow-300">Biggest</span> Web Platform
        </h1>
        <p className="mt-4 text-xl max-w-2xl mx-auto">
          A scalable modular frontend built with Next.js & Tailwind — engineered for 
          enterprise, startups, and global products.
        </p>
        <div className="mt-8 flex justify-center gap-6">
          <a href="/auth/register" className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
            Get Started
          </a>
          <a href="#features" className="bg-white text-indigo-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
            Explore Features
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-2">Fast Performance</h3>
          <p className="text-gray-600">Optimized frontend with Tailwind CSS and Next.js performance ready.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-2">Scalable Architecture</h3>
          <p className="text-gray-600">Modular UI ready for features like social, ecommerce, dashboard, and more.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <h3 className="text-2xl font-bold mb-2">Enterprise Ready</h3>
          <p className="text-gray-600">Designed for teams, growth, and real world products.</p>
        </div>
      </section>

      {/* Feature Detail with Icons */}
      <section className="px-6 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Why BigWeb?</h2>
          <p className="mt-4 text-gray-700">
            BigWeb is created with scalability in mind — perfect for creating apps,
            portals, and platforms that need rock-solid performance.
          </p>
          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-3">
              <span className="text-indigo-600">✅</span>
              Component Reusability
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-600">✅</span>
              High Performance Rendering
            </li>
            <li className="flex items-center gap-3">
              <span className="text-indigo-600">✅</span>
              SEO & Accessibility Ready
            </li>
          </ul>
        </div>
        <div className="flex-1">
          {/* Placeholder for image */}
          <div className="bg-gray-200 h-64 rounded-xl"></div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Trusted by Tech Teams</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-800">
              “BigWeb made building scalable frontend so easy — performance is amazing.”
            </p>
            <p className="mt-4 font-semibold">— Dev Team Lead</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-800">
              “Our team loves the component system. Easy to extend and maintain.”
            </p>
            <p className="mt-4 font-semibold">— Engineering Manager</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-800">
              “Best frontend starter template for large web projects.”
            </p>
            <p className="mt-4 font-semibold">— CEO Startup</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white text-center py-12 rounded-lg px-6">
        <h3 className="text-2xl font-bold">Ready to Build Your Big Web?</h3>
        <a href="/auth/register" className="mt-4 inline-block bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">
          Start Your Journey
        </a>
      </section>

    </main>
  );
}
