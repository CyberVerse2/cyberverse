import Logo from './Logo';

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-white py-6 md:py-12 flex justify-between items-center px-6 md:px-25">
      <Logo />
      <nav className="flex items-center gap-4 md:gap-0 md:w-[40%]">
        <ul className="hidden lg:flex justify-between items-center w-full gap-8">
          <li>
            <p className="text-xl">Home</p>
          </li>
          <li>
            <p className="text-xl">About Us</p>
          </li>
          <li>
            <p className="text-xl">Things we've built</p>
          </li>
          <li>
            <a
              href="mailto:ejioforcelestine77@gmail.com"
              className="flex justify-center items-center bg-[#1b1f25] gap-2 p-6 rounded-[3.7rem] hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              <img src="./mail.svg" alt="send a mail" className="pr-2 w-6 h-6" />
              <p className="border border-l-white border-[#1b1f25] pl-4 text-xl">Send An Email</p>
            </a>
          </li>
        </ul>
        {/* Mobile CTA button */}
        <a
          href="mailto:ejioforcelestine77@gmail.com"
          className="lg:hidden flex justify-center items-center bg-[#1b1f25] gap-2 p-4 px-6 rounded-[3.7rem] hover:opacity-90 transition-opacity"
        >
          <img src="./mail.svg" alt="send a mail" className="w-5 h-5" />
          <p className="text-lg">Contact</p>
        </a>
      </nav>
    </header>
  );
}
