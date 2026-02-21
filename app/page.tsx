export default function Home() {
  return (
    <section className="text-center space-y-8">
      
      <h2 className="text-5xl font-bold leading-tight">
        Build The <span className="text-blue-500">Biggest</span> Web Platform
      </h2>

      <p className="text-gray-400 max-w-2xl mx-auto">
        This is not just a project. This is a scalable, modular, enterprise-ready frontend architecture designed to grow into a global platform.
      </p>

      <div className="flex justify-center gap-6">
        <a href="/login" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
          Get Started
        </a>

        <a href="/register" className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition border border-gray-700">
          Create Account
        </a>
      </div>

    </section>
  )
}
