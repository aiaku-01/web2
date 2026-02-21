export default function Settings() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Account Settings</h1>
      <div className="bg-white p-6 rounded-lg shadow space-y-4">
        <p>Email: user@example.com</p>
        <p>Username: BigUser</p>
        <button className="bg-indigo-600 text-white py-2 px-4 rounded">
          Update Settings
        </button>
      </div>
    </div>
  );
}
