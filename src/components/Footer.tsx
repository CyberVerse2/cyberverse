import Logo from './Logo';

export default function Footer() {
  return (
    <section className="h-[30rem] text-white bg-black -mx-25 px-25 ">
      <div className='flex justify-between'>
        <Logo />
        <ul className='flex justify-between'>
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
          <ul className='flex'>
            <li>
              <img src="./x.svg" alt="x" />
            </li>
            <li>
              <img src="./footer-mail.svg" alt="mail" />
            </li>
            <li>
              <img src="./telegram.svg" alt="telegram" />
            </li>
          </ul>
        </div>
      </div>
      <p>© Cyberverse Labs 2025 — Build what’s next now.</p>
    </section>
  );
}
