import { motion } from 'framer-motion';
import Logo from './Logo';

export default function Footer() {
  const footerLinks = ['Home', 'About Us', 'Products', 'Contact us'];
  const socialLinks = [
    { name: 'x', icon: './x.svg', href: 'https://x.com/cyberverselabs' },
    { name: 'mail', icon: './footer-mail.svg', href: 'mailto:ejioforcelestine77@gmail.com' },
    { name: 'telegram', icon: './telegram.svg', href: 'https://t.me/thecyberverse' },
  ];

  return (
    <section className="h-auto md:h-[30rem] text-white bg-black -mx-6 md:-mx-25 px-6 md:px-25 border-t border-white/20 py-12 md:py-0">
      <div className="flex flex-col md:flex-row justify-between items-center h-full md:h-1/2 pt-0 md:pt-20 gap-8 md:gap-0">
        <Logo />
        <ul className="flex flex-wrap justify-center md:justify-between gap-6 md:gap-12">
          {footerLinks.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-xl hover:text-[var(--button-color)] transition-colors">
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <ul className="flex items-center gap-6">
            {socialLinks.map((social) => (
              <motion.li key={social.name} whileHover={{ scale: 1.2, rotate: 5 }} whileTap={{ scale: 0.9 }}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-80 transition-opacity"
                >
                  <img src={social.icon} alt={social.name} className="w-8 h-8 md:w-auto md:h-auto" />
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-xl md:text-2xl text-center pt-12 md:pt-20 text-white/50"
      >
        © Cyberverse Labs 2025 — Build what's next now.
      </motion.p>
    </section>
  );
}
