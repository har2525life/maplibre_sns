import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { auth } from "../lib/firebaseConfig";
import {
  createUserWithEmailAndPassword as signUp,
  signInWithEmailAndPassword as signIn,
} from "firebase/auth";

interface Auth {
  email: string;
  password: string;
}

function AuthPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm<Auth>();

  const [isDisplay, setIsDisplay] = useState(false);
  const [isError, setIsError] = useState(false);

  const submitAuth = async (event: Auth) => {
    const { email, password } = event;
    try {
      isDisplay
        ? await signUp(auth, email, password)
        : await signIn(auth, email, password);
      navigate("/map");
    } catch (error) {
      setIsError(!isError);
    }
  };

  useEffect(() => {
    reset();
  }, [isDisplay]);

  return (
    <div className="p-10 max-w-md mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-center">
        {isDisplay ? "Sign up" : "Sign in"}
      </h1>
      <form
        onSubmit={handleSubmit((event) => submitAuth(event))}
        className="space-y-4"
      >
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Your email
          </label>
          <input
            {...register("email")}
            type="email"
            name="email"
            data-testid="email"
            className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 focus:outline-none block w-full p-2.5"
            placeholder="name@company.com"
          />
          {isError && (
            <label className="block mt-1 text-xs text-red-600">
              入力値に誤りがあります
            </label>
          )}
        </div>
        <div>
          <label htmlFor="password" className="block mb-2 text-sm font-medium">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            name="password"
            data-testid="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 focus:outline-none block w-full p-2.5"
          />
          {isError && (
            <label className="block mt-1 text-xs text-red-600">
              入力値に誤りがあります
            </label>
          )}
        </div>

        <button
          type="submit"
          data-testid="authBtn"
          className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-blue-300 focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          {isDisplay ? "SIGNUP" : "SIGNIN"}
        </button>
      </form>
      <p className="text-sm font-light text-gray-500">
        Don’t have an account yet?
        <a
          onClick={() => setIsDisplay(!isDisplay)}
          className="font-medium text-blue-600 hover:underline hover:cursor-pointer"
        >
          {isDisplay ? "Sign in" : "Sign up"}
        </a>
      </p>
    </div>
  );
}

export default AuthPage;
