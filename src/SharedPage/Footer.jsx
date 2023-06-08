import logo from "/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center mb-4 md:mb-0">
          <img src={logo} alt="Website Logo" className="h-12 w-auto" />
          <h3 className="text-white text-lg font-bold ml-2">SportCamp</h3>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="mr-6">
            <h4 className="text-white font-bold mb-2">Contact Us</h4>
            <p className="text-white">Phone: (123) 456-7890</p>
            <p className="text-white">Email: info@sportsacademy.com</p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-2">Address</h4>
            <p className="text-white">123 Main Street, City, State, ZIP Code</p>
          </div>
        </div>
      </div>
      <div className="bg-primary-darker py-4 text-center">
        <p className="text-white text-sm">
          &copy; {new Date().getFullYear()} SportCamp. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
