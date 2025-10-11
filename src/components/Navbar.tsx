import Logo from './Logo';

export default function Navbar() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 text-white py-6 md:py-12 flex justify-between items-center px-6 md:px-25">
      <Logo />
      <ul className="hidden lg:flex justify-between items-center w-[40%]">
        <li className="">
          <p>Home</p>
        </li>
        <li>
          <p>About Us</p>
        </li>
        <li>
          <p>Products</p>
        </li>
        <li>
          <a
            href="mailto:ejioforcelestine77@gmail.com"
            className="flex justify-center items-center bg-[#1b1f25] gap-2 p-6 w-74 rounded-[3.7rem] hover:opacity-90 transition-opacity"
          >
            <img src="./mail.svg" alt="send a mail" className="pr-2" />
            <p className="border border-l-white border-[#1b1f25] pl-4">Send An Email</p>
          </a>
        </li>
      </ul>
      {/* Mobile contact button */}
      <a
        href="mailto:ejioforcelestine77@gmail.com"
        className="lg:hidden flex items-center bg-[#1b1f25] gap-2 p-4 px-6 rounded-[3.7rem] hover:opacity-90 transition-opacity"
      >
        <img src="./mail.svg" alt="send a mail" className="w-5 h-5" />
        <p className="text-lg whitespace-nowrap">Contact</p>
      </a>
    </header>
  );
}
