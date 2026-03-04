function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-teal-600">
          Circle
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 text-gray-600 font-medium">
          <li className="hover:text-teal-600 cursor-pointer">Product</li>
          <li className="hover:text-teal-600 cursor-pointer">Features</li>
          <li className="hover:text-teal-600 cursor-pointer">Resources</li>
          <li className="hover:text-teal-600 cursor-pointer">Pricing</li>
        </ul>

        {/* Button */}
        <button className="bg-teal-600 text-white px-5 py-2 rounded-lg hover:bg-teal-700 transition">
          Get Started
        </button>

      </div>
    </nav>
  );
}

export default Navbar;