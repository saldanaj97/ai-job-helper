'use client';

import { useTheme } from 'next-themes';

export default function CustomNavbar() {
  const { theme, systemTheme } = useTheme();

  // Determine the current theme
  const currentTheme = theme === 'system' ? systemTheme : theme;

  // Apply the background based on the theme
  const navbarBackgroundClass =
    currentTheme === 'light' ? 'bg-neutral-800' : 'bg-white';

  return (
    <nav className="absolute right-0 top-0 z-50 max-w-full bg-transparent">
      <div className="flex justify-end">
        {/* Navbar container with the cut-in effect */}
        <div
          className={`relative flex items-center gap-4 rounded-bl-[50px] ${navbarBackgroundClass} p-4 sm:flex`}
        >
          <div className="dropdown">
            <button className="text-md ml-4 flex items-center text-background">
              Features
              <svg
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.293 4.793a1 1 0 011.414 0L8 10.086l5.293-5.293a1 1 0 111.414 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414z"
                />
              </svg>
            </button>
            <ul className="dropdown-menu absolute mt-2 hidden w-[340px] rounded-xl bg-white text-background">
              <li className="p-4 hover:bg-gray-200">Autoscaling</li>
              <li className="p-4 hover:bg-gray-200">Usage Metrics</li>
              <li className="p-4 hover:bg-gray-200">Production Ready</li>
              <li className="p-4 hover:bg-gray-200">+99% Uptime</li>
              <li className="p-4 hover:bg-gray-200">+Supreme Support</li>
            </ul>
          </div>
          <p className="text-background">|</p>
          <a className="text-background" href="#">
            Customers
          </a>
          <p className="text-background">|</p>
          <a className="text-background" href="#">
            Integrations
          </a>
        </div>
      </div>
    </nav>
  );
}
