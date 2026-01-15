// app/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0B1220] text-white">
      <div className="mx-auto max-w-6xl px-4 py-14">
        {/* Top grid */}
        <div className="grid gap-10 text-center md:text-left md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center justify-center md:justify-start gap-3">
              {/* replace with your logo */}
              <img
                src="./smallLogo.png" // <-- replace
                alt="Logo"
                className="h-10 w-auto"
              />
              
            </div>

            <p className="mt-6 max-w-xs mx-auto md:mx-0 text-sm leading-relaxed text-white/70">
              Top learning experiences that create more talent in the world.
            </p>
          </div>

          {/* Columns */}
          <div className="grid gap-10 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-4 justify-items-center md:justify-items-start">
            <div>
              <p className="text-sm font-semibold text-white/80">Product</p>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>
                  <a className="hover:text-white" href="#">
                    Overview
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Features
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Solutions
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white/80">Company</p>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>
                  <a className="hover:text-white" href="#">
                    About us
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Careers
                  </a>
                </li>
                <li className="flex items-center justify-center md:justify-start gap-2">
                  <a className="hover:text-white" href="#">
                    Press
                  </a>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[11px] font-semibold text-white/80">
                    New
                  </span>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    News
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white/80">Social</p>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>
                  <a className="hover:text-white" href="#">
                    Twitter
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    GitHub
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Dribbble
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold text-white/80">Legal</p>
              <ul className="mt-4 space-y-3 text-sm text-white/70">
                <li>
                  <a className="hover:text-white" href="#">
                    Terms
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Privacy
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Cookies
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-14 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Ed-Circle. All rights reserved.
          </p>

          <div className="flex items-center justify-center sm:justify-end gap-4 text-white/50">
            {/* Twitter */}
            <a href="#" aria-label="Twitter" className="hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 5.92c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.2 1.7-2.1-.7.4-1.5.8-2.4.9a3.7 3.7 0 00-6.4 2.5c0 .3 0 .6.1.9-3-.2-5.7-1.7-7.5-4a3.7 3.7 0 001.1 4.9c-.6 0-1.1-.2-1.6-.4v.1c0 1.8 1.3 3.3 3 3.6-.3.1-.6.1-1 .1-.2 0-.4 0-.6-.1.4 1.6 1.9 2.8 3.6 2.8A7.5 7.5 0 012 19.1a10.6 10.6 0 005.7 1.7c6.9 0 10.7-5.8 10.7-10.8v-.5c.8-.6 1.4-1.2 1.9-2z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.94 6.5a2.2 2.2 0 11-4.4 0 2.2 2.2 0 014.4 0zM2.8 21h4.3V8.2H2.8V21zM9.2 8.2h4.1v1.8h.1c.6-1.1 2-2.3 4.1-2.3 4.4 0 5.2 2.9 5.2 6.6V21h-4.3v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21H9.2V8.2z" />
              </svg>
            </a>

            {/* Facebook */}
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 22v-8h2.7l.4-3H13.5V9.1c0-.9.3-1.6 1.7-1.6h1.5V5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5V11H7.5v3h2.3v8h3.7z" />
              </svg>
            </a>

            {/* GitHub */}
            <a href="#" aria-label="GitHub" className="hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5a11.5 11.5 0 00-3.6 22.4c.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1.1-.8.1-.8.1-.8 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.7-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.4 1.2a11.6 11.6 0 016.2 0c2.4-1.5 3.4-1.2 3.4-1.2.6 1.6.2 2.8.1 3.1.8.9 1.2 2 1.2 3.3 0 4.5-2.7 5.5-5.3 5.8.4.3.8 1 .8 2.1v3.1c0 .3.2.7.8.6A11.5 11.5 0 0012 .5z" />
              </svg>
            </a>

            {/* Dribbble */}
            <a href="#" aria-label="Dribbble" className="hover:text-white">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm7.9 9.1a16.3 16.3 0 00-5.7-.3c-.2-.5-.3-.8-.5-1.2A19.1 19.1 0 0016.8 6a8 8 0 013.1 5.1zM12 4a8 8 0 013.4.8 17.2 17.2 0 01-2.9 3.3A31.7 31.7 0 009 4.4 8 8 0 0112 4zM7.2 5.4a29.5 29.5 0 013.8 3.7 24.6 24.6 0 01-5.6 2.2A8 8 0 017.2 5.4zM4 12v-.2a26.6 26.6 0 006.5-2.6c.2.4.4.7.5 1.1a18.6 18.6 0 00-5 4.9A7.9 7.9 0 014 12zm8 8a7.9 7.9 0 01-4.6-1.5 16.4 16.4 0 014.4-4.2c.7 1.9 1.2 3.8 1.5 5.7A8 8 0 0112 20zm3.5-.8c-.3-1.8-.8-3.7-1.5-5.7a14.6 14.6 0 015.4.4A8 8 0 0115.5 19.2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
