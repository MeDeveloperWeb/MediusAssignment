import Link from 'next/link';

export default function NavLink() {
  return (
    <nav>
      <ul className="flex h-full justify-evenly gap-8">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">About</Link>
        </li>
        <li>
          <Link href="/">Services</Link>
        </li>
        <li>
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
