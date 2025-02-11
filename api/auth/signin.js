import { signIn } from 'next-auth/react';

export default function SignIn() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-8 border rounded-md">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <div className="mt-4">
          <button
            onClick={() => signIn('google')}
            className="bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Sign in with Google
          </button>
        </div>
        <div className="mt-4">
          <button
            onClick={() => signIn('credentials')}
            className="bg-gray-500 text-white py-2 px-4 rounded-md"
          >
            Sign in with Email/Password
          </button>
        </div>
      </div>
    </div>
  );
}
