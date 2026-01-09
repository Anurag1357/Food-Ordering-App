import { Link } from "react-router-dom";
import { navs } from "../../utils/constants/page";

const Header = () => {
  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="w-full flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link to={"/"}> <img
            src="/icons/swiggyIcon.jpg"
            alt="Swiggy Logo"
            className="h-10 w-auto object-contain"
          /></Link>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">

          {navs.map((items) => {
            return (
              <Link key={items?.id} to={items?.link}>
                <p className="cursor-pointer hover:text-orange-500 transition">
                  {items?.label}
                </p>
              </Link>
            )
          })}
          {/* CTA Button */}
          <button className="bg-orange-500 text-white px-4 py-1.5 rounded-lg hover:bg-orange-600 transition">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
