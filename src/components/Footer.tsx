import Logo from './Logo';

export default function Footer() {
  return (
    <section className="h-[30rem] text-white bg-black -mx-6 md:-mx-25 px-6 md:px-25 border-t border-white">
      <div className="flex flex-col md:flex-row justify-between items-center h-1/2 pt-12 md:pt-20 gap-6 md:gap-0">
        <Logo />
        <ul className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-0 md:w-2/5">
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>About Us</p>
          </li>
          <li>
            <p>Products</p>
          </li>
          <li>
            <p>Contact us</p>
          </li>
        </ul>
        <div>
          <ul className="flex items-center w-full">
            <li className="px-2">
              <a
                href="https://x.com/cyberverselabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src="./x.svg" alt="x" className="w-6 h-6 md:w-auto md:h-auto" />
              </a>
            </li>
            <li className="px-2">
              <a
                href="mailto:ejioforcelestine77@gmail.com"
                className="hover:opacity-80 transition-opacity"
              >
                <img src="./footer-mail.svg" alt="mail" className="w-6 h-6 md:w-auto md:h-auto" />
              </a>
            </li>
            <li className="px-2">
              <a
                href="https://t.me/thecyberverse"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img src="./telegram.svg" alt="telegram" className="w-6 h-6 md:w-auto md:h-auto" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-2xl md:text-4xl text-center pt-16 md:pt-20">
        © Cyberverse Labs 2025 — Build what's next now.
      </p>
    </section>
  );
}
