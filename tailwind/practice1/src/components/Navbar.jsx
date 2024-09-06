// Desc: Navbar component
import logo from "../assets/logo.png";
import { navItems } from "../constants/index";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex items-center justify-between">
          {/* logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
            <div className="text-xl tracking-tight">ViR</div>
          </div>
          {/* links */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((items, index) => (
              <li key={index}>
                <a href={items.href}>{items.label}</a>
              </li>
            ))}
          </ul>
          {/* signin and signup buttons */}
          <div className="hidden lg:flex justify-center space-x-12">
            <a href="#" className="px-3 py-2 border rounded-md">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-blue-500 to-blue-800 px-3 py-2 border rounded-md"
            >
              Create an Account
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
