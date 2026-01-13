export default function Products() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900">Our Ecosystem</h1>
          <p className="mt-4 text-gray-600">Available on iOS, Android, and Web</p>
        </div>

        {/* Product Showcase */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-12">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 p-12 flex flex-col justify-center">
              <div className="uppercase tracking-wide text-sm text-emerald-600 font-semibold mb-2">Mobile Application</div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">AkhaamUlQuran Mobile</h2>
              <ul className="space-y-4 mb-8">
                {['AI Voice Recognition', 'Daily Goals & Streaks', 'Famous Qari Imitation Mode', 'Kid-friendly Interface'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700">
                    <span className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mr-3 text-sm">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex gap-4">
                <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition">Download for iOS</button>
                <button className="bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-700 transition">Download for Android</button>
              </div>
            </div>
            <div className="md:w-1/2 bg-gray-100 flex items-center justify-center p-8">
              {/* Abstract App Visualization */}
              <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                 <div className="bg-white p-4 rounded-xl shadow-sm h-40 flex flex-col justify-between">
                    <div className="w-8 h-8 rounded-full bg-red-100"></div>
                    <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                 </div>
                 <div className="bg-white p-4 rounded-xl shadow-sm h-40 mt-8 flex flex-col justify-between">
                    <div className="w-8 h-8 rounded-full bg-blue-100"></div>
                    <div className="h-2 w-1/2 bg-gray-200 rounded"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-center mb-8">Premium Features</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="p-6 text-left text-gray-500 font-medium">Feature</th>
                  <th className="p-6 text-center text-gray-900 font-bold">Free</th>
                  <th className="p-6 text-center text-emerald-600 font-bold">Premium</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr><td className="p-6">Surah Access</td><td className="text-center">Limited</td><td className="text-center text-emerald-600">Unlimited</td></tr>
                <tr><td className="p-6">AI Corrections</td><td className="text-center">5 / day</td><td className="text-center text-emerald-600">Unlimited</td></tr>
                <tr><td className="p-6">Offline Downloads</td><td className="text-center text-gray-400">—</td><td className="text-center text-emerald-600">Included</td></tr>
                <tr><td className="p-6">Detailed Analytics</td><td className="text-center text-gray-400">—</td><td className="text-center text-emerald-600">Included</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}