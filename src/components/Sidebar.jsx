import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="m-4 md:m-10 text-white p-6 rounded-2xl min-w-[120px] flex flex-col gap-10 items-center md:items-start">
      {/* Logo Container */}
      <div>
        <img
          src="images/bugeyes_logo.jpg"
          alt="bugeyes logo"
          className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover"
        />
      </div>

      <nav className="w-full ">
        <ul className="space-y-6 text-center md:text-left font-bar font-bold text-2xl">
          <Link to="/">
            <li className="hover:text-gray-300 transition-colors cursor-pointer  px-4 py-2 rounded-lg hover:bg-white/10">
              Home
            </li>
          </Link>
          <Link to="/band">
            <li className="hover:text-gray-300 transition-colors cursor-pointer  px-4 py-2 rounded-lg hover:bg-white/10">
              The Band
            </li>
          </Link>
          <Link to="/shows">
            <li className="hover:text-gray-300 transition-colors cursor-pointer px-4 py-2 rounded-lg hover:bg-white/10">
              Shows
            </li>
          </Link>
          <Link to="/gallery">
            <li className="hover:text-gray-300 transition-colors cursor-pointer  px-4 py-2 rounded-lg hover:bg-white/10">
              Gallery
            </li>
          </Link>
          <Link to="/contact">
            <li className="hover:text-gray-300 transition-colors cursor-pointer px-4 py-2 rounded-lg hover:bg-white/10">
              Contact
            </li>
          </Link>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
