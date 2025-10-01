import Logo from './Logo';

export default function Footer() {
  return (
    <section>
      <div>
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
        <div>
          <ul>
            <li>
              <img src="./x.svg" alt="x" />
            </li>
            <li>
              <img src="./mail.svg" alt="mail" />
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
