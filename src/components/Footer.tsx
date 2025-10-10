import Logo from './Logo';

export default function Footer() {
  return (
    <section className="h-[30rem] text-white bg-black -mx-25 px-25 border-t border-white">
      <div className="flex justify-between items-center h-1/2 pt-20">
        <Logo />
        <ul className="flex justify-between w-2/5">
          <li>
            <p>Home</p>
          </li>
          <li>
            <p>About Us</p>
          </li>
          <li>
            <p>Things we've built</p>
          </li>
          <li>
            <p>Contact us</p>
          </li>
        </ul>
        <div>
          <ul className="flex items-center w-full">
            <li className="px-2">
              <img src="./x.svg" alt="x" />
            </li>
            <li className="px-2">
              <img src="./footer-mail.svg" alt="mail" />
            </li>
            <li className="px-2">
              <img src="./telegram.svg" alt="telegram" />
            </li>
          </ul>
        </div>
      </div>
      <p className="text-4xl text-center pt-20">© Cyberverse Labs 2025 — Build what’s next now.</p>
    </section>
  );
}
