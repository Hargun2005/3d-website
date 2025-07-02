const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <a
          href="https://github.com/Hargun2005"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon transition duration-200 transform hover:scale-110">
          <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
        </a>
        <a
          href="https://www.linkedin.com/in/hargun-singh-89430630b/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon transition duration-200 transform hover:scale-110">
          <img src="/assets/linkedin.svg" alt="twitter" className="w-1/2 h-1/2" />
        </a>
      </div>

      <p className="text-white-500">© 2025 Hargun Singh. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
