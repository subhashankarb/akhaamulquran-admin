export default function About() {
  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-50 py-16 text-center border-b border-gray-100">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About AkhaamUlQuran</h1>
        <p className="text-gray-600 max-w-2xl mx-auto px-4">
          We are a team of developers and scholars dedicated to making Quranic education accessible to everyone through technology.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-16 space-y-24">
        {/* Mission */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="aspect-video bg-emerald-100 rounded-2xl flex items-center justify-center">
              <span className="text-emerald-800 font-bold opacity-50 text-xl">[Image: Team Working]</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              To leverage Artificial Intelligence to preserve the authenticity of Quranic recitation while making learning accessible, interactive, and personalized for Muslims globally.
            </p>
          </div>
        </div>

        {/* Vision */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-12">
           <div className="md:w-1/2">
            <div className="aspect-video bg-indigo-100 rounded-2xl flex items-center justify-center">
              <span className="text-indigo-800 font-bold opacity-50 text-xl">[Image: Global Impact]</span>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              A world where every individual, regardless of their location or native language, can recite the Holy Quran with the correct Tajweed and understanding.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-6 bg-slate-50 rounded-xl">
              <div className="text-4xl font-bold text-emerald-600 mb-2">10k+</div>
              <div className="text-sm text-gray-500">Active Users</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
              <div className="text-4xl font-bold text-emerald-600 mb-2">114</div>
              <div className="text-sm text-gray-500">Surahs AI-Enabled</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-sm text-gray-500">Countries</div>
            </div>
            <div className="p-6 bg-slate-50 rounded-xl">
              <div className="text-4xl font-bold text-emerald-600 mb-2">4.9</div>
              <div className="text-sm text-gray-500">App Store Rating</div>
            </div>
        </div>
      </div>
    </div>
  );
}