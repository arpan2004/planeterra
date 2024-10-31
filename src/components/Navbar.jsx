import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-neutral-400 shadow-md' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className={`text-2xl font-bold ${scrolled ? 'text-gray-800' : 'text-white'}`}>
          Planeterra
        </div>
        <div className="flex items-center">
          <button 
            className={`md:hidden p-2 ${scrolled ? 'text-gray-800' : 'text-white'}`} 
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            {sidebarOpen ? 'Close' : 'Menu'}
          </button>
        </div>
        {/* Sidebar for mobile menu */}
        {sidebarOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden">
            <div className="absolute top-0 left-0 h-full w-64 bg-white shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Menu</h2>
              <ul className="flex flex-col space-y-4">
                <li><a href="#" className="hover:text-blue-600" onClick={closeSidebar}>Home</a></li>
                <li><a href="#" className="hover:text-blue-600" onClick={closeSidebar}>Services</a></li>
                <li><a href="#" className="hover:text-blue-600" onClick={closeSidebar}>Portfolio</a></li>
                <li><a href="#" className="hover:text-blue-600" onClick={closeSidebar}>About Us</a></li>
                <li><a href="#" className="hover:text-blue-600" onClick={closeSidebar}>Contact</a></li>
              </ul>
              <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded" onClick={closeSidebar}>Close Menu</button>
            </div>
          </div>
        )}
        {/* Regular menu for larger screens */}
        <ul className={`hidden md:flex space-x-6 ${scrolled ? 'text-gray-800' : 'text-white'}`}>
          <li><a href="#" className="hover:text-blue-600">Home</a></li>
          <li><a href="#" className="hover:text-blue-600">Services</a></li>
          <li><a href="#" className="hover:text-blue-600">Portfolio</a></li>
          <li><a href="#" className="hover:text-blue-600">About Us</a></li>
          <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
