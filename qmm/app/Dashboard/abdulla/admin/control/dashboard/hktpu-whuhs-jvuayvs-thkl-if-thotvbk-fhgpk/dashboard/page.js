"use client";

import React, { useState } from "react";

export default function CodeLoginPage() {
  const [code, setCode] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("Code:", code);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="relative hidden lg:block">
            <img
              src="/login-hero.jpg"
              alt="Login background"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-black/0 to-black/10" />
          </div>

          <div className="p-8 sm:p-10 lg:p-12">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
              <div>
                <div className="text-sm font-semibold text-slate-900">UI Unicorn</div>
                <div className="text-xs text-slate-500">Secure access</div>
              </div>
            </div>

            <div className="mt-10">
              <h1 className="text-2xl font-semibold text-slate-900">
                Nice to see you again
              </h1>
              <p className="mt-1 text-sm text-slate-500">
                Enter your code to continue
              </p>

              <form onSubmit={onSubmit} className="mt-8 space-y-5">
                <div>
                  <label className="block text-sm font-medium text-slate-700">
                    Code
                  </label>
                  <input
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter code"
                    autoComplete="one-time-code"
                    className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3
                               text-slate-900 placeholder:text-slate-400 outline-none transition
                               focus:border-slate-300 focus:bg-white focus:ring-4 focus:ring-indigo-100"
                  />
                </div>

                <button
                  type="submit"
                  disabled={!code.trim()}
                  className="w-full rounded-lg bg-blue-600 px-4 py-3 text-sm font-semibold text-white
                             transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Sign in
                </button>
              </form>

              <div className="mt-10 text-center text-xs text-slate-400">
                © {new Date().getFullYear()} Perfect Login
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
