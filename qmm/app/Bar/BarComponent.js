"use client";
import React, { useEffect, useState } from "react";
import { useCourseModalStore } from "../Store/courseModal.store";
const BarComponent = () => {
  const [open, setOpen] = useState(false);
  const ChangeCurrentPageState = useCourseModalStore((s) => s.ChangeCurrentPage);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <>
      <header className="w-full border-b bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/smallLogo.png"
              alt="Logo"
              className="h-[4rem] w-[5rem]"
            />
          </div>

          {/* Search (desktop/tablet) */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex w-full max-w-md items-center gap-2 rounded-full border bg-white px-3 py-2 shadow-sm">
              <svg
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>

              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-500 text-gray-700"
                placeholder="Want to learn?"
                
                
              />

              <button className="hover:cursor-pointer  flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700 hover:bg-emerald-100">
                <p>Search</p>
              </button>
            </div>
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700">
            <div className="hover:text-[#FACE68]" href="#" onClick={()=> ChangeCurrentPageState("Mainpage")}>
              Home
            </div>
            <div className="hover:text-[#FACE68]" onClick={()=> ChangeCurrentPageState("AboutUs")}>
              About us
            </div>
            <a className="hover:text-[#FACE68]" href="#">
              Courses
            </a>
            <a className="hover:text-[#FACE68]" href="#">
              Contact us
            </a>
            <a className="hover:text-[#FACE68]" href="#">
              FAQ&apos;s
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen(true)}
            className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          >
            <svg
              className="h-7 w-7"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* Side drawer */}
      <aside
        className={`fixed left-0 top-0 z-50 h-full w-[280px] bg-white shadow-xl transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* drawer header */}
        <div className="flex items-center justify-between border-b px-4 py-3">
          <div className="flex items-center gap-3">
            <img src="/smallLogo.png" alt="Logo" className="h-12 w-12" />
            <span className="font-semibold text-gray-800">Menu</span>
          </div>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="inline-flex items-center justify-center rounded-lg p-2 text-gray-700 hover:bg-gray-100"
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Search (mobile inside drawer) */}
        <div className="p-4 border-b">
          <div className="flex items-center gap-2 rounded-full border bg-white px-3 py-2">
            <svg
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M21 21l-4.3-4.3m1.8-5.2a7 7 0 11-14 0 7 7 0 0114 0z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-black-500 text-gray-700"
              placeholder="Want to learn?"
            />
            <button className="hover:cursor-pointer rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-medium text-emerald-700">
              Search
            </button>
          </div>
        </div>

        {/* drawer links */}
        <nav className="p-4">
          <ul className="space-y-2 text-sm font-medium text-gray-700">
            {[
              ["Home"],
              ["About us"],
              ["Courses"],
              ["Contact us"],
              ["FAQ's"],
            ].map(([label]) => (
              <li key={label}>
                <div
                  className="block rounded-lg px-3 py-2 hover:bg-gray-50 hover:text-[#FACE68]"
                  
                  onClick={()=> label==="About us" ? ChangeCurrentPageState("AboutUs") : 
                     label ==="Home" ? ChangeCurrentPageState("Mainpage"):
                    
                    
                    null}
                >
                  {label}
                </div>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default BarComponent;
