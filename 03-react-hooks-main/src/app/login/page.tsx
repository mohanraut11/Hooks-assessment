'use client';
import { useRouter } from 'next/navigation';
import { useAuth } from '../context/AuthContext';
import useForm from '../hooks/useForm';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();

  const { values, handleChange, handleSubmit } = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    login({ id: 1, name: 'Admin User', email: values.email });
    router.push('/');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black">
      <div className="w-full max-w-sm border border-gray-300 dark:border-gray-700 bg-white dark:bg-black p-10 rounded-md">
        <h1 className="text-3xl font-bold text-center mb-6 text-black dark:text-white font-sans tracking-wide">
          Welcome Back
        </h1>
        <form onSubmit={(e) => handleSubmit(e, onSubmit)} className="space-y-3">
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="email"
            className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            required
          />
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-3 py-2 bg-gray-100 dark:bg-gray-800 dark:text-white border border-gray-300 dark:border-gray-600 rounded-sm text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#0095f6] hover:bg-[#1877f2] text-white text-sm py-2 rounded-md font-semibold transition-colors"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
