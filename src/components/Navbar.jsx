import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import logo from "../assets/planeterra_logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const sidebarRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Services list
  const services = [
    { title: "Aerial Photography", path: "/services/aerial-photography" },
    { title: "Inspections", path: "/services/inspections" },
    { title: "Mapping & Surveying", path: "/services/mapping-surveying" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 100);
    };

    const handleClickOutside = (event) => {
      if (
        sidebarOpen &&
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target) &&
        !menuButtonRef.current.contains(event.target)
      ) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [sidebarOpen]);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-neutral-400 shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div
          className={`flex items-center text-2xl font-bold ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <img src={logo} alt="Planeterra Logo" className="h-8 w-8 mr-2" />
          Planeterra
        </div>
        <div className="flex items-center">
          <button
            ref={menuButtonRef}
            className={`md:hidden p-2 ${
              scrolled ? "text-gray-800" : "text-white"
            }`}
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? "Close" : "Menu"}
          </button>
        </div>

        {/* Sidebar for mobile menu */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden">
            <div
              ref={sidebarRef}
              className="absolute top-0 left-0 h-full w-64 bg-white shadow-lg p-6"
            >
              <h2 className="text-xl font-bold mb-4">Menu</h2>
              <ul className="flex flex-col space-y-4">
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-600"
                    onClick={closeSidebar}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <div className="flex flex-col">
                    <Link
                      to="/services"
                      className="hover:text-blue-600"
                      onClick={closeSidebar}
                    >
                      Services
                    </Link>
                    <button
                      className="text-sm text-gray-600 mt-1 hover:text-blue-600"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      {mobileServicesOpen ? "Hide services" : "Show services"}
                    </button>
                    {mobileServicesOpen && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {services.map((service) => (
                          <li key={service.path}>
                            <Link
                              to={service.path}
                              className="hover:text-blue-600 block"
                              onClick={closeSidebar}
                            >
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
                <li>
                  <Link
                    to="/portfolio"
                    className="hover:text-blue-600"
                    onClick={closeSidebar}
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-blue-600"
                    onClick={closeSidebar}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-blue-600"
                    onClick={closeSidebar}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <button
                className="mt-4 px-4 py-2 bg-blue-700 text-white rounded"
                onClick={closeSidebar}
              >
                Close Menu
              </button>
            </div>
          </div>
        )}

        {/* Regular menu for larger screens */}
        <ul
          className={`hidden md:flex space-x-6 ${
            scrolled ? "text-gray-800" : "text-white"
          }`}
        >
          <li>
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
          </li>
          <li className="group relative">
            <div className="flex items-center hover:text-blue-600">
              <Link to="/services" className="inline-block">
                Services
              </Link>
              <ChevronDown className="h-4 w-4 ml-1 inline-block" />
            </div>
            <div className="invisible absolute h-6 w-full"></div>
            <ul className="absolute left-0 top-full w-48 bg-white rounded-md shadow-lg py-2 z-50 hidden group-hover:block hover:block">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/portfolio" className="hover:text-blue-600">
              Portfolio
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-600">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;