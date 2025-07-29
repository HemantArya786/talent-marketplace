import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 px-6 py-8 mt-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-lg font-bold mb-2">YourBrand</h3>
          <p className="text-sm">Empowering developers with powerful tools and knowledge.</p>
        </div>

        <div>
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to={"/"} className="hover:underline">Home</Link></li>
            <li><Link to={"/about"} className="hover:underline">About</Link></li>
            <li><Link to={"/services"} className="hover:underline">Services</Link></li>
            <li><Link to={"/contact"} className="hover:underline">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-md font-semibold mb-2">Follow Us</h4>
          <div className="flex space-x-4">
            <Link to={""}><Facebook className="hover:text-white" /></Link >
            <Link to={""}><Twitter className="hover:text-white" /></Link>
            <Link to={""}><Linkedin className="hover:text-white" /></Link>
            <Link to={""}><Instagram className="hover:text-white" /></Link>
          </div>
        </div>
      </div>

      <div className="mt-6 text-center text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
