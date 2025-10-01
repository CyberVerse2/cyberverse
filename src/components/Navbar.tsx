import Logo from './Logo';

export default function Navbar() {
  return (
    <header className="bg-[var(--main-color)]">
      <Logo />
      <ul>
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
          <div>
            <img src="./mail.svg" alt="send a mail" />
            <p>| Send An Email</p>
          </div>
        </li>
      </ul>
    </header>
  );
}
