import Logo from './Logo';

export default function Navbar() {
  return (
    <header className="bg-[var(--main-color)] text-white py-12 flex justify-between items-center">
      <Logo />
      <ul className='flex justify-between items-center w-[50%]'>
        <li className=''>
          <p>Home</p>
        </li>
        <li>
          <p>About Us</p>
        </li>
        <li>
          <p>Things we've built</p>
        </li>
        <li>
          <div className='flex justify-center bg-[#1b1f25] gap-2 p-5 w-74 rounded-[3.7rem]'>
            <img src="./mail.svg" alt="send a mail" />
            <p>| Send An Email</p>
          </div>
        </li>
      </ul>
    </header>
  );
}
