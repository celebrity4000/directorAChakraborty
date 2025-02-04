import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-Eerie_Black text-gray-300 py-6">
      <div className="container mx-auto text-center">
        <p className="mb-4">
          &copy; {new Date().getFullYear()} Director Anirban Chakraborty. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mt-4">
          <a
            href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BVfsLG16w%2F%3Fmibextid%3DLQQJ4d&e=AT1Kk_mcCzHFWfGS3SuCqQuz5Qky0tIeYz7uVf1Ta9zx8ZXOUicCuVfw8UWcRQgM7M2yeL9jiW4JJ73iDn1JEsiGEUNgYI0ht2WE1bqbXq7tv9LlIYiIFx8"
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-6 h-6" />
          </a>
          <a
            href="https://www.instagram.com/anirban.chakraborty.5815?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="w-6 h-6" />
          </a>
          {/* <a
            href="https://linkedin.com"
            className="hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-6 h-6" />
          </a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
