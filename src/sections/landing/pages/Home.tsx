import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-emerald-900 text-white py-20 lg:py-32 overflow-hidden">
        {/* Abstract Background pattern */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-800 rounded-l-full opacity-20 transform translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-600 rounded-full opacity-20 filter blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
              <span className="inline-block px-4 py-1 rounded-full bg-emerald-800 text-emerald-200 text-sm font-semibold mb-6 border border-emerald-700">
                #1 AI Quran Assistant
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Perfect Your Recitation with <span className="text-emerald-400">AI Precision</span>
              </h1>
              <p className="text-lg text-emerald-100 mb-8 max-w-lg mx-auto md:mx-0">
                AkhaamUlQuran uses advanced artificial intelligence to listen to your recitation and correct your Tajweed in real-time. Available now on Android & iOS.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-8 py-4 bg-white text-emerald-900 font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors">
                  Download App
                </button>
                <Link to="/about" className="px-8 py-4 bg-transparent border-2 border-emerald-400 text-emerald-50 font-bold rounded-lg hover:bg-emerald-800 transition-colors">
                  Learn More
                </Link>
              </div>
            </div>
            
            {/* Phone Mockup Placeholder */}
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-[500px] border-8 border-gray-900 bg-gray-800 rounded-[3rem] shadow-2xl flex items-center justify-center overflow-hidden">
                <div className="absolute top-0 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>
                {/* Screen Content */}
                <div className="w-full h-full bg-emerald-50 flex flex-col items-center pt-12 px-4 relative">
                  <div className="w-full h-32 bg-emerald-600 rounded-xl mb-4 shadow-md flex items-center justify-center">
                    <span className="text-white font-arabic text-2xl">بِسْمِ ٱللَّٰهِ</span>
                  </div>
                  <div className="w-full space-y-3">
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                  </div>
                  <div className="mt-8 p-4 bg-white rounded-xl shadow-lg w-full border-l-4 border-emerald-500">
                     <p className="text-xs text-gray-500">AI Feedback</p>
                     <p className="text-sm font-bold text-gray-800">Perfect Pronunciation!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
            <p className="text-gray-600 mt-4">Features tailored for the modern learner.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Real-time Correction", desc: "Instant feedback on your Makharij and Tajweed rules as you recite." },
              { title: "Progress Tracking", desc: "Detailed analytics on your daily recitation habits and improvements." },
              { title: "Offline Mode", desc: "Download Surahs and practice anywhere without an internet connection." }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center text-xl font-bold mb-6">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}