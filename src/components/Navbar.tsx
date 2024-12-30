import { useState, useEffect } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * (1 / 3)) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full bg-[rgba(255,255,255)]  right-0 z-10 rounded-b-2xl shadow-2xl transition-transform duration-700 ease-in-out fixed top-0 transform ${
        isScrolled ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div className="flex justify-between items-center px-10 py-6">
        <h1 className="font-Krona font-medium text-left text-3xl">DIRECTOR</h1>
      </div>
    </nav>
  );
}

export default Navbar;
