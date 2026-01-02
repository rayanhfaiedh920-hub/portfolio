import Logo from './Logo';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="container mx-auto py-6 px-4 flex items-center justify-between">
      <Link href="/">
        <Logo />
      </Link>
      <nav className="flex items-center space-x-8">
        <Link href="#services" className="text-lg font-medium text-gray-300 hover:text-accent transition-colors">Services</Link>
        <Link href="#works" className="text-lg font-medium text-gray-300 hover:text-accent transition-colors">Works</Link>
        <Link href="#blog" className="text-lg font-medium text-gray-300 hover:text-accent transition-colors">Blog</Link>
      </nav>
    </header>
  );
}
