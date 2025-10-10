import Logo from './Logo';

export default function Footer() {
  return (
    <section className="min-h-[30rem] h-auto text-white bg-black -mx-6 md:-mx-25 px-6 md:px-25 border-t border-white py-12 md:py-0">
      <div className="flex flex-col md:flex-row justify-between items-center md:h-1/2 md:pt-20 gap-8 md:gap-0">
        <Logo />
        <ul className="flex flex-wrap justify-center md:justify-between gap-4 md:gap-0 md:w-2/5 text-center">
          <li>
            <p className="text-xl md:text-2xl">Home</p>
          </li>
          <li>
            <p className="text-xl md:text-2xl">About Us</p>
          </li>
          <li>
            <p className="text-xl md:text-2xl">Things we've built</p>
          </li>
          <li>
            <p className="text-xl md:text-2xl">Contact us</p>
          </li>
        </ul>
        <div>
          <ul className="flex items-center justify-center w-full gap-2">
            <li className="px-2">
              <a
                href="https://x.com/cyberverselabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity block"
              >
                <img src="./x.svg" alt="x" className="w-8 h-8 md:w-auto md:h-auto" />
              </a>
            </li>
            <li className="px-2">
              <a
                href="mailto:ejioforcelestine77@gmail.com"
                className="hover:opacity-80 transition-opacity block"
              >
                <img src="./footer-mail.svg" alt="mail" className="w-8 h-8 md:w-auto md:h-auto" />
              </a>
            </li>
            <li className="px-2">
              <a
                href="https://t.me/thecyberverse"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity block"
              >
                <img src="./telegram.svg" alt="telegram" className="w-8 h-8 md:w-auto md:h-auto" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-2xl md:text-4xl text-center pt-12 md:pt-20 pb-8 md:pb-0">
        © Cyberverse Labs 2025 — Build what's next now.
      </p>
    </section>
  );
}
