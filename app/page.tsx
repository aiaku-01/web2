export default function Home() {
  return (
    <main className="text-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-3xl font-bold">Welcome to Your Big Frontend Project</h1>
      <p className="mt-4 text-lg">This is the foundation of your web app.</p>
      <div className="mt-8 space-x-4">
        <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded">Login</a>
        <a href="/register" className="bg-green-600 text-white px-4 py-2 rounded">Register</a>
        <a href="/dashboard" className="bg-gray-700 text-white px-4 py-2 rounded">Dashboard</a>
      </div>
    </main>
  );
}
