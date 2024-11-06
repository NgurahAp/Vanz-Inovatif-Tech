import { AboutUs } from "./components/AboutUs";
import { ContactUs } from "./components/ContactUs";
import Navbar from "./components/Navbar";
import { Product } from "./components/Product";

function App() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Product />
      <ContactUs />
      <footer className="bg-gray-400 text-sm py-10">
        <div className="container mx-auto flex justify-between items-center px-4">
          <span>© 2023 NgurahAp. All rights reserved.</span>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
