import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginApi, getProfileApi } from '../../../services/auth.service';
import { loginSuccess, setToken } from '../../../store/authSlice';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      setLoading(true);

      const loginResponse = await loginApi(email, password);
      
      if (!loginResponse.token) {
        throw new Error("No token received from server");
      }

      const token = loginResponse.token;
      dispatch(setToken(token));

      const profileResponse = await getProfileApi(token);
      const user = profileResponse.user || profileResponse.data || profileResponse;

      if (!user || !user.role) {
         throw new Error("Invalid user data received");
      }

      dispatch(loginSuccess(user));

      if (user.role === 'admin' || user.role === 'subadmin') {
        navigate('/admin/dashboard');
      } else {
        setError("You are not authorized to access the Admin Panel.");
        setLoading(false);
      }

    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-emerald-600 rounded-lg mx-auto flex items-center justify-center text-white text-xl font-bold mb-4">A</div>
          <h2 className="text-2xl font-bold text-gray-900">Admin Portal</h2>
          <p className="text-gray-500 text-sm">Sign in to manage the application</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
              placeholder="admin@akhaamulquran.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition"
              placeholder="••••••••"
              required
            />
          </div>
          
          <button 
            type="submit" 
            disabled={loading}
            className={`w-full py-3 text-white font-bold rounded-lg transition shadow-md flex justify-center items-center ${
              loading ? 'bg-emerald-400 cursor-not-allowed' : 'bg-emerald-600 hover:bg-emerald-700'
            }`}
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              'Sign In'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-xs text-gray-400">Restricted Area. Authorized Personnel Only.</p>
        </div>
      </div>
    </div>
  );
}