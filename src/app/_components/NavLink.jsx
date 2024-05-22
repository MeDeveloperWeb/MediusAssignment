import Link from 'next/link';

export default function NavLink() {
  return (
    <nav>
      <ul className="flex h-full justify-evenly gap-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
