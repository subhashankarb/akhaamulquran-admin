export default function Contact() {
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Get in Touch</h1>
          <p className="text-gray-500">Have questions? We'd love to hear from you.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-emerald-50 rounded-xl text-center">
            <h3 className="font-bold text-emerald-900">Email</h3>
            <p className="text-emerald-700 mt-2 text-sm">support@akhaamulquran.com</p>
          </div>
          <div className="p-6 bg-emerald-50 rounded-xl text-center">
            <h3 className="font-bold text-emerald-900">Phone</h3>
            <p className="text-emerald-700 mt-2 text-sm">+91 98765 43210</p>
          </div>
          <div className="p-6 bg-emerald-50 rounded-xl text-center">
            <h3 className="font-bold text-emerald-900">Office</h3>
            <p className="text-emerald-700 mt-2 text-sm">Bangalore, India</p>
          </div>
        </div>

        <form className="space-y-6 bg-white p-8 border border-gray-200 rounded-2xl shadow-sm">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition" />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
            <textarea rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"></textarea>
          </div>

          <button type="button" className="w-full py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition shadow-lg">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}